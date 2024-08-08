import { AccountInfo } from "@type/taikhoan"
import { atomWithStorage } from 'jotai/utils'

export const userAtom = atomWithStorage<AccountInfo | null>("info",null)
