# DREAMRIG source deployment branch

This branch is the safe source/build lane for the repaired DREAMRIG site. `main` remains compiled GitHub Pages output.

`source.tar.gz` contains the repaired Vite source used for the migration build. A push to this branch performs a clean frozen-lockfile Ubuntu build; `main` is replaced only if install, typecheck, and production build all pass.

A pre-repair live backup is preserved on `dreamrig-live-backup-20260819`.
