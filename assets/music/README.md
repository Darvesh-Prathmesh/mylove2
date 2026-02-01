# 🎵 Music Folder

Add a romantic background song here! (Optional)

## Recommended Song:
- `romantic-song.mp3` - Your song or a romantic instrumental

## Music Suggestions:
- "La Vie En Rose" (instrumental)
- "Can't Help Falling in Love" (instrumental)
- "A Thousand Years" (instrumental)
- "Perfect" by Ed Sheeran (instrumental)
- Any soft piano or guitar romantic piece

## Music Guidelines:
- **Format:** MP3 (best compatibility)
- **Length:** 2-3 minutes
- **Volume:** The code sets it to 30% automatically
- **Type:** Instrumental works best (no distracting lyrics)
- **File size:** Keep under 5MB

## How to Add Music:
1. Find/download your romantic song
2. Convert to MP3 if needed
3. Save as `romantic-song.mp3` in this folder
4. Open `index.js`
5. Find the `triggerCelebration()` function (around line 380)
6. Uncomment these lines:

```javascript
// Uncomment these lines:
const audio = new Audio('assets/music/romantic-song.mp3');
audio.volume = 0.3;
audio.play();
```

Should become:
```javascript
const audio = new Audio('assets/music/romantic-song.mp3');
audio.volume = 0.3;
audio.play();
```

## Where to Find Music:
- YouTube (use a converter)
- Spotify (download if you have premium)
- Free music sites: Incompetech, Free Music Archive

## Important Notes:
- Music only plays AFTER she clicks YES
- Some browsers may block autoplay
- Test it before the big moment!
- Consider copyright if sharing publicly

---
**Tip:** Choose "your song" if you have one - it's more meaningful! 🎶
