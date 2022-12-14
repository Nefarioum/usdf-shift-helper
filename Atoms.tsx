
import { atom } from "recoil";

export const selectedShiftAtom = atom({
  key: "selectedShift", 
  default: null, 
});

export const selectedNameAtom = atom({
  key: "selectedName", 
  default: {name: 'NefariousZ', link: "https://www.habbo.com/habbo-imaging/avatarimage?user=NefariousZ&direction=2&head_direction=2&action=crr=667&gesture=srp", changed: false}, 
});

export const hasShiftStartedAtom = atom({
  key: "shiftStated", 
  default: false
});

export const triggerTimerAtom = atom({
  key: "triggerTimer", 
  default: 100
});

export const middleOfShiftReached = atom({
  key: "middleofShift", 
  default: false
});

export const endOfShiftReached = atom({
  key: "endofShift", 
  default: false
});


export const setSoundAtom = atom({
  key: "setSoundAtom", 
  default: {sound1: false, sound2: false, sound3: false}
});

export const selectBranchAtom = atom({
  key: "selectbranchatom", 
  default: {branch: '', colour: '', backgroundImage: '', selected: false}
});