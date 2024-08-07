import { AccountInfo } from "@type/taikhoan"
import { atom } from 'jotai'

export const userAtom = atom<AccountInfo | null>(null)
