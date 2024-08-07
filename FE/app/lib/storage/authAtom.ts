// import { atomWithStorage } from "jotai/utils"

// export const tokenAtom = atomWithStorage<string | null>("token" , null)

import {atom} from "jotai"
export const tokenAtom = atom<string | null>(null)