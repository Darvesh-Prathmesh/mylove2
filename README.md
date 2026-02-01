# 💖 Valentine Proposal Website - ENHANCED

A beautiful, smooth, romantic Valentine proposal website with **mini-game unlock**, **Giphy API integration**, and **seamless visual flow**.

## ✨ NEW Features

### 🎮 Mini-Game Gate
- **Catch 5 hearts** to unlock the main website
- Interactive and engaging introduction
- Smooth transition to main content

### 🎞️ Random GIFs from Giphy API
- Fresh romantic GIFs on every visit
- Powered by Giphy API
- Automatic fallbacks if API unavailable

### 🖼️ Interactive Image Carousel
- Blur-to-clear reveal animations
- Overlay captions on each photo
- Navigation arrows + indicators
- Ken Burns zoom effect

### 🌊 Unified Color System
- Smooth gradient flow across all sections
- No harsh visual breaks
- Professional, premium feel

## 🎨 Color Flow (Top → Bottom)

```
Intro        → pink-light → white-soft
Memories     → white-soft → pink-main
Transition   → pink-main → purple-light
Question     → purple-light → pink-dark
Celebration  → pink-dark → pink-main
```

## 🚀 Quick Start

### 1. Get Giphy API Key (Optional but Recommended)

1. Go to [Giphy Developers](https://developers.giphy.com/)
2. Create free account
3. Create an app to get API key
4. Open `script.js`
5. Replace `YOUR_GIPHY_API_KEY_HERE` with your key

**Without API key:** Website uses fallback GIFs (still works great!)

### 2. Open the Website

- Double-click `open-website.bat`
- OR open `index.html` in browser

### 3. Play the Mini-Game

- Tap/click 5 floating hearts
- Main website unlocks automatically

## 🎯 User Experience Flow

```
1. Mini-Game (Catch 5 Hearts)
   ↓
2. Intro (Typewriter Animation)
   ↓
3. Memories (Interactive Carousel)
   ↓
4. Transition (Build Anticipation)
   ↓
5. Question (YES/NO Buttons)
   ↓
6. Celebration (Confetti & Hearts!)
```

## 🎨 Customization Guide

### Change Greeting Text
**File:** `script.js` (lines 35-36)
```javascript
typewriter: {
    text1: "Hey my love ❤️",  // ← Your greeting
    text2: "I made something special just for you…",
}
```

### Add Your Photos
**File:** `index.html` (lines 75-130)

Replace image URLs and captions:
```html
<img src="assets/images/photo1.jpg" alt="Our memory 1">
<div class="memory-caption">
    <p>Your custom caption here 💕</p>
</div>
```

### Update Image Captions
Each photo has an overlay caption. Make them personal!

Examples:
- "The smile I fall for every day 💕"
- "My favorite place is next to you 🥰"
- "Every moment with you is magic ✨"

### Adjust Mini-Game Difficulty
**File:** `script.js` (lines 18-23)
```javascript
miniGame: {
    heartsToCollect: 5,  // Change to 3 for easier, 10 for harder
    maxHearts: 8,
    heartSpawnInterval: 1500,
}
```

### Change Colors
**File:** `style.css` (lines 8-14)
```css
:root {
    --pink-light: #ffd6e8;
    --pink-main: #ff8ccf;
    --pink-dark: #d63384;
    --purple-light: #e8def8;
    --purple-main: #a78bfa;
    --white-soft: #fff7fb;
}
```

### Adjust Carousel Speed
**File:** `script.js` (lines 44-47)
```javascript
carousel: {
    autoAdvance: true,
    interval: 5000,  // ms between slides
}
```

## 📁 File Structure

```
valentine/
├── index.html          (Main HTML with mini-game)
├── style.css           (Unified color system + animations)
├── script.js           (Mini-game + Giphy API + interactions)
├── open-website.bat    (Quick launcher)
└── assets/
    ├── images/         (Your photos here)
    ├── gifs/           (Optional local GIFs)
    └── music/          (Optional background music)
```

## 🎮 Mini-Game Details

### How It Works:
1. Hearts spawn randomly on screen
2. User taps/clicks to collect them
3. Counter shows progress (0/5)
4. After collecting 5 hearts:
   - Game fades out
   - Main website fades in
   - Typewriter animation starts

### Customization:
- Change heart symbols in `CONFIG.miniGame.heartSymbols`
- Adjust spawn rate with `heartSpawnInterval`
- Modify difficulty with `heartsToCollect`

## 🎞️ Giphy API Integration

### Search Terms (Customizable):
```javascript
searchTerms: {
    intro: 'cute love bear',
    question: 'romantic hearts valentine',
    celebration: 'happy celebration love'
}
```

### How It Works:
1. Fetches random GIFs from Giphy on page load
2. Different GIF each time you refresh
3. Falls back to static GIFs if API unavailable
4. Content rating: G (family-friendly)

### To Get API Key:
1. Visit https://developers.giphy.com/
2. Sign up (free)
3. Create an app
4. Copy API key
5. Paste in `script.js` line 11

## 🖼️ Interactive Carousel Features

### Animations:
- **Blur-to-clear reveal** when slide becomes active
- **Ken Burns effect** (slow zoom on photos)
- **Smooth fade transitions** between slides
- **Overlay captions** with gradient background

### Controls:
- **Auto-advance** every 5 seconds
- **Arrow buttons** for manual navigation
- **Indicator dots** to jump to specific photo
- **Touch-friendly** on mobile

### CSS Animation:
```css
.memory-card {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    filter: blur(6px);
    transition: all 1s ease;
}

.memory-card.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
}
```

## 🌊 Visual Continuity

### Design Principles:
1. **Smooth gradient flow** - No harsh section breaks
2. **Consistent color palette** - Unified pink/purple theme
3. **Gentle animations** - Everything fades/slides smoothly
4. **Premium feel** - Professional, polished design

### Gradient Direction:
All gradients flow **top → bottom (180deg)** for seamless scrolling experience.

## 📱 Mobile Optimization

- **Mobile-first design**
- **Touch-friendly** mini-game
- **Large buttons** (thumb-friendly)
- **Responsive images**
- **Smooth touch interactions**
- **No horizontal scroll**

## 🎯 Testing Checklist

### Mini-Game:
- [ ] Hearts spawn correctly
- [ ] Tap/click detection works
- [ ] Counter updates
- [ ] Game completes at 5 hearts
- [ ] Smooth transition to main site

### Giphy Integration:
- [ ] GIFs load (or fallbacks appear)
- [ ] Different GIFs on refresh
- [ ] All 3 GIFs present (intro, question, celebration)

### Carousel:
- [ ] Images reveal with blur-to-clear effect
- [ ] Captions overlay correctly
- [ ] Arrows navigate properly
- [ ] Indicators work
- [ ] Auto-advance functions

### Visual Flow:
- [ ] Gradients transition smoothly
- [ ] No harsh color jumps
- [ ] Scrolling feels continuous
- [ ] All sections visually connected

### Interactions:
- [ ] Typewriter animation plays
- [ ] NO button dodges
- [ ] YES button triggers celebration
- [ ] Confetti animates smoothly

## 🔧 Advanced Customization

### Add More Photos:
1. Add more `.memory-card` divs in HTML
2. Update `CONFIG.carousel.totalSlides` in script.js
3. Carousel automatically adjusts

### Change Mini-Game Hearts:
```javascript
heartSymbols: ['❤️', '💕', '💖', '💗', '💓', '💝', '🌹', '💐']
```

### Modify NO Button Messages:
```javascript
messages: [
    "Your custom message 😜",
    "Add as many as you want!",
]
```

### Adjust Animation Speeds:
**File:** `style.css`
```css
:root {
    --transition-fast: 0.3s;
    --transition-smooth: 0.6s;
    --transition-slow: 1s;
}
```

## 💡 Pro Tips

1. **Test mini-game first** - Make sure it's fun, not frustrating
2. **Use Giphy API** - Fresh GIFs make it feel new every time
3. **Personalize captions** - Make them specific to your relationship
4. **Test on mobile** - Most people will view on phones
5. **Keep photos high quality** - But compress them (tinypng.com)
6. **Preview before sharing** - Test the entire flow

## 🐛 Troubleshooting

### GIFs Not Loading:
- Check internet connection
- Verify Giphy API key is correct
- Fallback GIFs should still work

### Mini-Game Hearts Not Clickable:
- Check JavaScript console for errors
- Ensure script.js is loaded
- Try refreshing page

### Carousel Not Advancing:
- Check `CONFIG.carousel.autoAdvance` is true
- Verify `totalSlides` matches number of photos
- Look for console errors

### Colors Look Different:
- Ensure CSS variables are defined
- Check gradient directions (should be 180deg)
- Verify no conflicting styles

## 🎉 What Makes This Special

### Premium Features:
- ✨ **Mini-game unlock** - Unique, engaging entry
- 🎞️ **Dynamic GIFs** - Fresh content every visit
- 🖼️ **Blur-to-clear reveals** - Professional animation
- 🌊 **Seamless flow** - One continuous experience
- 💖 **Playful interactions** - NO button dodge
- 🎊 **Epic celebration** - Confetti + heart rain

### Technical Excellence:
- Pure vanilla JavaScript (no frameworks)
- Giphy API integration
- GPU-accelerated animations
- Mobile-first responsive design
- Clean, commented code
- Easy to customize

## 📚 Documentation

- **README.md** - This file (overview + setup)
- **CUSTOMIZATION-GUIDE.md** - Detailed customization
- **TESTING-CHECKLIST.md** - Complete testing guide
- **QUICK-START.md** - Get started in 5 minutes

## 🚀 Ready to Launch?

1. ✅ Get Giphy API key (optional)
2. ✅ Add your photos
3. ✅ Customize text and captions
4. ✅ Test mini-game
5. ✅ Test on mobile
6. ✅ Show her and enjoy! 💖

---

**Good luck! She's going to love it! 🌹**

*Made with love, enhanced with magic ✨*
