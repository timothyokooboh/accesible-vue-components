import type { InjectionKey } from "vue";
import type { AlertVariant } from "./types";

// Accordion
export const ACCORDION_STATE = Symbol();
export const ACCORDION_HEADER = Symbol();
export const ACCORDION_CURRENT_OPEN_PANEL = Symbol();

// Alert
export const ALERT_VARIANT = Symbol();
export const ALERT_HIDDEN = Symbol();
