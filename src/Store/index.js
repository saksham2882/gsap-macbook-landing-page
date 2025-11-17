import { create } from "zustand";

const DEFAULT_COLOR = "#adb5bd";
const DEFAULT_SCALE = 0.08;
const DEFAULT_TEXTURE = '/videos/feature-1.mp4';

const useMacBookStore = create((set) => ({
    color: DEFAULT_COLOR,
    setColor: (color) => set({ color }),

    scale: DEFAULT_SCALE,
    setScale: (scale) => set({ scale }),

    texture: DEFAULT_TEXTURE,
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: DEFAULT_COLOR, scale: DEFAULT_SCALE, texture: DEFAULT_TEXTURE }),
}))

export default useMacBookStore;