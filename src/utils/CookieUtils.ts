class CookieUtils {
  public static all(): { [x: string]: string } {
    const cookies: { [x: string]: string } = {};

    if (document.cookie !== "") {
      const pairs: Array<string> = document.cookie.split("; ");
      pairs.forEach((pair: string) => {
        const parts = pair.split("=");
        cookies[parts[0]] = parts[1];
      });
    }

    return cookies;
  }

  public static get(key: string): string | undefined {
    const cookies = CookieUtils.all();
    return cookies[key];
  }

  public static set(
    key: string,
    value: any,
    expires: Date | null = null,
  ): void {
    let cookie = `${key}=${value}`;
    if (expires) {
      cookie += `; expires=${expires.toUTCString()}`;
    }
    document.cookie = cookie;
  }
}

export default CookieUtils;
