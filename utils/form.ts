/**
 * 入力された文字列が有効なホスト名かどうかをチェックする
 *
 * @param input チェックされる文字列
 * @returns 有効なホスト名はtrue, それ以外の場合はfalse
 */
export function isHostname(input: string): boolean {
  if (!input) {
    return false
  }

  const ipPortRegex = /^\d{1,3}(\.\d{1,3}){3}(:\d+)?$/

  // localhostの正規表現
  const localhostnameRegex = /^(localhost)(:\d+)?$/

  // ホスト名の正規表現（日本語ドメイン名を含む）
  const hostnameRegex =
    /^(?!:\/\/)([a-zA-Z0-9\u4e00-\u9fa5-]+\.)*[a-zA-Z0-9\u4e00-\u9fa5-]+\.[a-zA-Z]{2,}(:\d+)?$/

  // ホスト名のみの場合と、ホスト名+ポート番号の場合の両方でチェックする
  return (
    ipPortRegex.test(input) ||
    localhostnameRegex.test(input) ||
    hostnameRegex.test(input)
  )
}
