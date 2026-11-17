"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Google Analytics, loaded only after the visitor has allowed it.
 *
 * Nothing from Google is requested and no cookie is set until "Allow analytics" is clicked.
 * The choice is kept in localStorage under `consentKey` (storing the choice itself needs no consent).
 * "Cookie settings" in the footer reopens the banner; declining afterwards removes the Analytics cookies.
 * Advertising features stay switched off in every case.
 */

const consentKey = "refco-analytics-consent";
const openEvent = "refco:consent-open";
type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const readChoice = (): Choice | null => {
  try {
    const v = window.localStorage.getItem(consentKey);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

const saveChoice = (c: Choice) => {
  try {
    window.localStorage.setItem(consentKey, c);
  } catch {
    /* private mode: the banner simply shows again on the next visit */
  }
};

function loadAnalytics(id: string) {
  if (document.getElementById("ga-tag")) return;
  window.dataLayer = window.dataLayer || [];
  // Google's tag expects the `arguments` object itself, not an array.
  const gtag: (...args: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag = gtag;
  gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  gtag("js", new Date());
  gtag("config", id);
  const script = document.createElement("script");
  script.id = "ga-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

function removeAnalytics(id: string) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
  const names = ["_ga", `_ga_${id.replace(/^G-/, "")}`];
  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of names) for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
  for (const name of names) document.cookie = `${name}=; Max-Age=0; path=/`;
}

export function Analytics() {
  const id = site.analyticsId;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    const choice = readChoice();
    if (choice === "granted") loadAnalytics(id);
    else if (choice === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(openEvent, reopen);
    return () => window.removeEventListener(openEvent, reopen);
  }, [id]);

  const decide = useCallback(
    (choice: Choice) => {
      saveChoice(choice);
      setOpen(false);
      if (choice === "granted") loadAnalytics(id);
      else removeAnalytics(id);
    },
    [id],
  );

  if (!id || !open) return null;
  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label="Analytics consent">
      <p>
        <strong>Analytics – your choice.</strong> We would like to use Google Analytics to see which pages are read. It sets cookies and sends usage
        data to Google, and it only starts if you allow it. No advertising cookies either way. Details: <Link href="/privacy#analytics">privacy policy</Link>.
      </p>
      <div className="consent-actions">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => decide("denied")}>
          Decline
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => decide("granted")}>
          Allow analytics
        </button>
      </div>
    </div>
  );
}

/** Footer link that reopens the consent banner, so a choice can be changed at any time. */
export function ConsentSettingsButton() {
  if (!site.analyticsId) return null;
  return (
    <button type="button" className="link-button" onClick={() => window.dispatchEvent(new Event(openEvent))}>
      Cookie settings
    </button>
  );
}
