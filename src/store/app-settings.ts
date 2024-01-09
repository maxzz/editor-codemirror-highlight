import { Theme, themeApply } from "@/utils/theme-apply";
import { proxy, subscribe } from "valtio";
import { debounce } from "@/utils";
import { mergeConfigRecursively } from "@/utils/merge-options";

export type AppSettings = {
    theme: Theme;
};

const defaultSettings: AppSettings = {
    theme: 'light',
};

const STORE_KEY = "editor-codemirror-highlight";

export const appSettings = proxy<AppSettings>(initialSettings());

function initialSettings(): AppSettings {
    const savedSettings = localStorage.getItem(STORE_KEY);
    let rv = defaultSettings;
    if (savedSettings) {
        try {
            rv = JSON.parse(savedSettings);
        } catch (error) {
        }
    }
    return mergeConfigRecursively(defaultSettings, rv);
}

themeApply(appSettings.theme);
subscribe(appSettings, () => {
    themeApply(appSettings.theme);
});

const saveDebounced = debounce(() => localStorage.setItem(STORE_KEY, JSON.stringify(appSettings)), 400);
subscribe(appSettings, saveDebounced);
