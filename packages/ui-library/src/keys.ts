import type { InjectionKey, Ref } from "vue";

// Accordion
export const ACCORDION_STATE = Symbol() as InjectionKey<{
  isPanelCollapsed: Ref<boolean>;
  toggleCollapse: () => void;
  headerId: string;
  panelId: string;
}>;
export const ACCORDION_HEADER = Symbol() as InjectionKey<string>;
export const ACCORDION_CURRENT_OPEN_PANEL = Symbol() as InjectionKey<{
  currentOpenPanel: Ref<string>;
  allowSingleOpen: boolean;
  updateCurrentOpenPanel: (value: string) => void;
}>;

// Alert
export const ALERT_VARIANT = Symbol();
export const ALERT_HIDDEN = Symbol();

// AlertDialog
export const ALERT_DIALOG_CTA = Symbol();
export const ALERT_DIALOG_TITLE_ID = Symbol();
export const ALERT_DIALOG_MESSAGE_ID = Symbol();

// ModalDialog
export const MODAL_DIALOG_CTA = Symbol();
export const MODAL_DIALOG_TITLE_ID = Symbol();
export const MODAL_DIALOG_MESSAGE_ID = Symbol();
