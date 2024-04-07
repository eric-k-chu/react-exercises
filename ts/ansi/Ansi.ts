export default class Ansi {
  private static m_Red = "\x1b[31m";
  private static m_Green = "\x1b[32m";
  private static m_Yellow = "\x1b[33m";
  private static m_Reset = "\x1b[0m";

  public static error(message: string): void {
    console.log(`${Ansi.m_Red}${message}${Ansi.m_Reset}`);
  }
  public static success(message: string): void {
    console.log(`${Ansi.m_Green}${message}${Ansi.m_Reset}`);
  }
  public static warn(message: string): void {
    console.log(`${Ansi.m_Yellow}${message}${Ansi.m_Reset}`);
  }
  public static log(...message: unknown[]): void {
    console.log(...message);
  }
}
