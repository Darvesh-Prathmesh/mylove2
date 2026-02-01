# 🎯 QUICK REFERENCE CARD

## 🚀 To Open Website
```
Double-click: open-website.bat
OR
Open: index.html in browser
```

## 🎮 Mini-Game
- **Goal:** Catch 5 hearts
- **How:** Tap/click floating hearts
- **Result:** Unlocks main website

## 🎞️ Giphy API Setup (Optional)
1. Go to: https://developers.giphy.com/
2. Create free account
3. Create app → Get API key
4. Open `script.js` → Line 11
5. Replace `YOUR_GIPHY_API_KEY_HERE` with your key

## ✏️ Quick Customizations

### Change Greeting
**File:** `script.js` (lines 35-36)
```javascript
text1: "Hey my love ❤️",
text2: "I made something special just for you…",
```

### Add Photos
**File:** `index.html` (lines 75-130)
```html
<img src="assets/images/photo1.jpg">
```

### Update Captions
**File:** `index.html` (inside each memory-card)
```html
<p>Your custom caption here 💕</p>
```

### Change Colors
**File:** `style.css` (lines 8-14)
```css
--pink-light: #ffd6e8;
--pink-main: #ff8ccf;
--pink-dark: #d63384;
```

### Adjust Mini-Game
**File:** `script.js` (line 19)
```javascript
heartsToCollect: 5,  // Change to 3 or 10
```

## 🎨 Color Gradient Flow
```
Intro       → pink-light → white-soft
Memories    → white-soft → pink-main
Transition  → pink-main → purple-light
Question    → purple-light → pink-dark
Celebration → pink-dark → pink-main
```

## 📱 Testing Checklist
- [ ] Mini-game works
- [ ] GIFs load (or fallbacks appear)
- [ ] Photos display correctly
- [ ] Captions show
- [ ] NO button dodges
- [ ] YES celebration triggers
- [ ] Test on mobile!

## 🐛 Quick Fixes

### GIFs Not Loading?
→ Check Giphy API key or use fallbacks (still works!)

### Mini-Game Too Hard?
→ Change `heartsToCollect: 5` to `3` in script.js

### Colors Look Wrong?
→ Check CSS variables in style.css

### Mobile Issues?
→ Test in Chrome DevTools mobile view

## 📚 Documentation Files

| File | Use When |
|------|----------|
| `QUICK-START.md` | Want to launch in 5 min |
| `README.md` | Need full overview |
| `GIPHY-API-GUIDE.md` | Setting up Giphy API |
| `CUSTOMIZATION-GUIDE.md` | Personalizing content |
| `TESTING-CHECKLIST.md` | Before showing her |
| `PROJECT-SUMMARY.md` | Complete feature list |

## 🎯 Before Showing Her

1. ✅ Test mini-game (catch 5 hearts)
2. ✅ Replace photos with yours
3. ✅ Update greeting text
4. ✅ Personalize captions
5. ✅ Get Giphy API key (optional)
6. ✅ Test on mobile
7. ✅ Charge device
8. ✅ Enjoy her reaction! 💖

## 💡 Pro Tips

- **Giphy API** = Fresh GIFs every visit (worth it!)
- **Test on mobile** = Most important!
- **Personalize captions** = Makes it special
- **Practice flow** = Know what to expect

## 🎉 Features at a Glance

✨ Mini-game unlock  
🎞️ Random Giphy GIFs  
🖼️ Blur-to-clear carousel  
💬 Overlay captions  
🌊 Seamless gradient flow  
😈 NO button dodge  
🎊 Confetti celebration  
📱 Mobile-perfect  

---

**Ready? Double-click `open-website.bat` and enjoy! 🌹**
