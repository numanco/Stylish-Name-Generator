/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FontMapping {
  name: string;
  map: Record<string, string>;
}

export const FONT_MAPPINGS: FontMapping[] = [
  {
    name: "Script",
    map: {
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
    }
  },
  {
    name: "Double Struck",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
    }
  },
  {
    name: "Bold Fraktur",
    map: {
      a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
      A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
    }
  },
  {
    name: "Sans Serif Bold",
    map: {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
      A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
    }
  },
  {
    name: "Monospace",
    map: {
      a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
      A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
    }
  },
  {
    name: "Bubble",
    map: {
      a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
      A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
    }
  },
  {
    name: "Squared",
    map: {
      a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
      A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
    }
  },
  {
    name: "Small Caps",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
      A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
    }
  },
  {
    name: "Wide",
    map: {
      a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
      A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
    }
  }
];

export interface DecorativeTemplate {
  category: string;
  prefix: string;
  suffix: string;
}

export const DECORATIVE_TEMPLATES: DecorativeTemplate[] = [
  { category: "Gaming", prefix: "꧁༒☬", suffix: "☬༒꧂" },
  { category: "Gaming", prefix: "★彡[", suffix: "]彡★" },
  { category: "Gaming", prefix: "༺", suffix: "༻" },
  { category: "Gaming", prefix: "亗", suffix: "亗" },
  { category: "Gaming", prefix: "×º°”˜`”°º×", suffix: "×º°”˜`”°º×" },
  { category: "Cute", prefix: "✿ ", suffix: " ✿" },
  { category: "Cute", prefix: "ʚ ", suffix: " ɞ" },
  { category: "Cute", prefix: "☾ ", suffix: " ☽" },
  { category: "Cute", prefix: "♡ ", suffix: " ♡" },
  { category: "Cute", prefix: "✧ ", suffix: " ✧" },
  { category: "Aesthetic", prefix: "𓂀 ", suffix: " 𓂀" },
  { category: "Aesthetic", prefix: "『", suffix: "』" },
  { category: "Aesthetic", prefix: "【", suffix: "】" },
  { category: "Aesthetic", prefix: "「", suffix: "」" },
  { category: "Aesthetic", prefix: "░", suffix: "░" },
  { category: "Cool", prefix: "⫷", suffix: "⫸" },
  { category: "Cool", prefix: "⚔️ ", suffix: " ⚔️" },
  { category: "Cool", prefix: "⚡ ", suffix: " ⚡" },
  { category: "Cool", prefix: "🔥 ", suffix: " 🔥" },
  { category: "Cool", prefix: "👑 ", suffix: " 👑" },
  { category: "Symbols", prefix: "† ", suffix: " †" },
  { category: "Symbols", prefix: "☯ ", suffix: " ☯" },
  { category: "Symbols", prefix: "☣ ", suffix: " ☣" },
  { category: "Symbols", prefix: "☢ ", suffix: " ☢" },
  { category: "Symbols", prefix: "☪ ", suffix: " ☪" },
  { category: "Sad", prefix: "☹ ", suffix: " ☹" },
  { category: "Sad", prefix: "☁️ ", suffix: " ☁️" },
  { category: "Sad", prefix: "⛓️ ", suffix: " ⛓️" },
  { category: "Sad", prefix: "🥀 ", suffix: " 🥀" },
  { category: "Sad", prefix: "💔 ", suffix: " 💔" },
  { category: "Gaming", prefix: "ᴳᵒᵈ", suffix: "" },
  { category: "Gaming", prefix: "꧁", suffix: "꧂" },
  { category: "Gaming", prefix: "亗", suffix: "亗" },
  { category: "Gaming", prefix: "〆", suffix: "" },
  { category: "Gaming", prefix: "々", suffix: "々" },
  { category: "Gaming", prefix: "『", suffix: "』" },
  { category: "Gaming", prefix: "【", suffix: "】" },
  { category: "Gaming", prefix: "「", suffix: "」" },
  { category: "Gaming", prefix: "░", suffix: "░" },
  { category: "Gaming", prefix: "▓", suffix: "▓" },
  { category: "Gaming", prefix: "▒", suffix: "▒" },
  { category: "Gaming", prefix: "⚔️", suffix: "⚔️" },
  { category: "Gaming", prefix: "🛡️", suffix: "🛡️" },
  { category: "Gaming", prefix: "🔫", suffix: "🔫" },
  { category: "Gaming", prefix: "💣", suffix: "💣" },
  { category: "Gaming", prefix: "🧨", suffix: "🧨" },
  { category: "Gaming", prefix: "🔪", suffix: "🔪" },
  { category: "Gaming", prefix: "🏹", suffix: "🏹" },
  { category: "Gaming", prefix: "🥋", suffix: "🥋" },
  { category: "Gaming", prefix: "🥊", suffix: "🥊" },
  { category: "Gaming", prefix: "🎮", suffix: "🎮" },
  { category: "Gaming", prefix: "🕹️", suffix: "🕹️" },
  { category: "Gaming", prefix: "👾", suffix: "👾" },
  { category: "Gaming", prefix: "🤖", suffix: "🤖" },
  { category: "Gaming", prefix: "👽", suffix: "👽" },
  { category: "Gaming", prefix: "👻", suffix: "👻" },
  { category: "Gaming", prefix: "💀", suffix: "💀" },
  { category: "Gaming", prefix: "☠️", suffix: "☠️" },
  { category: "Gaming", prefix: "🧛", suffix: "🧛" },
  { category: "Gaming", prefix: "🧟", suffix: "🧟" },
  { category: "Gaming", prefix: "🧞", suffix: "🧞" },
  { category: "Gaming", prefix: "🧚", suffix: "🧚" },
  { category: "Gaming", prefix: "🧜", suffix: "🧜" },
  { category: "Gaming", prefix: "🧝", suffix: "🧝" },
  { category: "Gaming", prefix: "🧙", suffix: "🧙" },
  { category: "Gaming", prefix: "🤴", suffix: "🤴" },
  { category: "Gaming", prefix: "👸", suffix: "👸" },
  { category: "Gaming", prefix: "🦸", suffix: "🦸" },
  { category: "Gaming", prefix: "🦹", suffix: "🦹" },
  { category: "Gaming", prefix: "👼", suffix: "👼" },
  { category: "Gaming", prefix: "👹", suffix: "👹" },
  { category: "Gaming", prefix: "👺", suffix: "👺" },
  { category: "Gaming", prefix: "🤡", suffix: "🤡" },
  { category: "Gaming", prefix: "💩", suffix: "💩" },
  { category: "Gaming", prefix: "👻", suffix: "👻" },
  { category: "Gaming", prefix: "💀", suffix: "💀" },
  { category: "Gaming", prefix: "☠️", suffix: "☠️" },
  { category: "Gaming", prefix: "👽", suffix: "👽" },
  { category: "Gaming", prefix: "👾", suffix: "👾" },
  { category: "Gaming", prefix: "🤖", suffix: "🤖" },
  { category: "Gaming", prefix: "🎃", suffix: "🎃" },
  { category: "Gaming", prefix: "😺", suffix: "😺" },
  { category: "Gaming", prefix: "😸", suffix: "😸" },
  { category: "Gaming", prefix: "😻", suffix: "😻" },
  { category: "Gaming", prefix: "😽", suffix: "😽" },
  { category: "Gaming", prefix: "😼", suffix: "😼" },
  { category: "Gaming", prefix: "🙀", suffix: "🙀" },
  { category: "Gaming", prefix: "😿", suffix: "😿" },
  { category: "Gaming", prefix: "😾", suffix: "😾" },
  { category: "Gaming", prefix: "🤲", suffix: "🤲" },
  { category: "Gaming", prefix: "👐", suffix: "👐" },
  { category: "Gaming", prefix: "🙌", suffix: "🙌" },
  { category: "Gaming", prefix: "👏", suffix: "👏" },
  { category: "Gaming", prefix: "🤝", suffix: "🤝" },
  { category: "Gaming", prefix: "👍", suffix: "👍" },
  { category: "Gaming", prefix: "👎", suffix: "👎" },
  { category: "Gaming", prefix: "👊", suffix: "👊" },
  { category: "Gaming", prefix: "✊", suffix: "✊" },
  { category: "Gaming", prefix: "🤛", suffix: "🤛" },
  { category: "Gaming", prefix: "🤜", suffix: "🤜" },
  { category: "Gaming", prefix: "🤞", suffix: "🤞" },
  { category: "Gaming", prefix: "🤟", suffix: "🤟" },
  { category: "Gaming", prefix: "🤘", suffix: "🤘" },
  { category: "Gaming", prefix: "👌", suffix: "👌" },
  { category: "Gaming", prefix: "👈", suffix: "👈" },
  { category: "Gaming", prefix: "👉", suffix: "👉" },
  { category: "Gaming", prefix: "👆", suffix: "👆" },
  { category: "Gaming", prefix: "👇", suffix: "👇" },
  { category: "Gaming", prefix: "☝️", suffix: "☝️" },
  { category: "Gaming", prefix: "✋", suffix: "✋" },
  { category: "Gaming", prefix: "🤚", suffix: "🤚" },
  { category: "Gaming", prefix: "🖐️", suffix: "🖐️" },
  { category: "Gaming", prefix: "🖖", suffix: "🖖" },
  { category: "Gaming", prefix: "👋", suffix: "👋" },
  { category: "Gaming", prefix: "🤙", suffix: "🤙" },
  { category: "Gaming", prefix: "💪", suffix: "💪" },
  { category: "Gaming", prefix: "🦾", suffix: "🦾" },
  { category: "Gaming", prefix: "🖕", suffix: "🖕" },
  { category: "Gaming", prefix: "✍️", suffix: "✍️" },
  { category: "Gaming", prefix: "🙏", suffix: "🙏" },
  { category: "Gaming", prefix: "🦶", suffix: "🦶" },
  { category: "Gaming", prefix: "🦵", suffix: "🦵" },
  { category: "Gaming", prefix: "🦿", suffix: "🦿" },
  { category: "Gaming", prefix: "💄", suffix: "💄" },
  { category: "Gaming", prefix: "💋", suffix: "💋" },
  { category: "Gaming", prefix: "👄", suffix: "👄" },
  { category: "Gaming", prefix: "🦷", suffix: "🦷" },
  { category: "Gaming", prefix: "👅", suffix: "👅" },
  { category: "Gaming", prefix: "👂", suffix: "👂" },
  { category: "Gaming", prefix: "🦻", suffix: "🦻" },
  { category: "Gaming", prefix: "👃", suffix: "👃" },
  { category: "Gaming", prefix: "👣", suffix: "👣" },
  { category: "Gaming", prefix: "👁️", suffix: "👁️" },
  { category: "Gaming", prefix: "👀", suffix: "👀" },
  { category: "Gaming", prefix: "🧠", suffix: "🧠" },
  { category: "Gaming", prefix: "🦴", suffix: "🦴" },
  { category: "Gaming", prefix: "🦷", suffix: "🦷" },
  { category: "Gaming", prefix: "🗣️", suffix: "🗣️" },
  { category: "Gaming", prefix: "👤", suffix: "👤" },
  { category: "Gaming", prefix: "👥", suffix: "👥" },
  { category: "Gaming", prefix: "🫂", suffix: "🫂" }
];

export const CATEGORIES = ["Popular", "Gaming", "Cute", "Aesthetic", "Cool", "Symbols", "Sad"];
