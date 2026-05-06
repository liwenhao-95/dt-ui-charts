#!/usr/bin/env sh
if [ -z "$HUSKY" ]; then
  return 0
fi

command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# hooks
for hook in $(dirname "$0")/../hooks/*; do
  [ -x "$hook" ] && "$hook"
done
