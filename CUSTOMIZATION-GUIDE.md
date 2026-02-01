# 🎨 Quick Customization Checklist

Use this checklist to personalize the website for your girlfriend!

## ✅ Essential Customizations

### 1. Update the Greeting Text
**File:** `index.js` (lines 11-12)
```javascript
text1: "Hey my love ❤️",  // ← Change this to your greeting
text2: "I made something special just for you…",  // ← Change this too
```

### 2. Replace Photos
**File:** `index.html` (lines 51-76)

Current photos are placeholders from Unsplash. Replace with your actual photos:

1. Create folder: `assets/images/`
2. Add 5 photos of you two together
3. Name them: `photo1.jpg`, `photo2.jpg`, etc.
4. Update the HTML:
```html
<img src="assets/images/photo1.jpg" alt="Our memory 1">
```

**Photo Tips:**
- Use landscape orientation (800x600 or similar)
- Compress images (use tinypng.com)
- Keep each under 500KB for fast loading

### 3. Update Photo Captions
**File:** `index.html` (lines 53, 59, 65, 71, 76)
```html
<p class="slide-caption">Every moment with you 💕</p>
```
Change to your own sweet messages!

### 4. Replace GIFs (Optional but Recommended)

**Where to find GIFs:**
- [Giphy.com](https://giphy.com)
- [Tenor.com](https://tenor.com)

**Search terms:**
- "cute bear love"
- "romantic hearts animation"
- "happy celebration"

**Save to:** `assets/gifs/` folder

**Update in `index.html`:**
- Line 32: Intro GIF
- Line 88: Question GIF
- Line 115: Celebration GIF

### 5. Customize the Final Photo
**File:** `index.html` (line 129)

This is the photo shown after she clicks YES. Use your best photo together!
```html
<img src="assets/images/final-photo.jpg" alt="Us together" class="final-photo">
```

### 6. Adjust the Question (Optional)
**File:** `index.html` (line 86)
```html
<h2 class="question-title">Will you be my Valentine? 💖</h2>
```

### 7. Customize Celebration Message
**File:** `index.html` (lines 121-123)
```html
<h2 class="celebration-title">YAYYYY 💖</h2>
<p class="celebration-text">You just made me the happiest person 🥰</p>
<p class="celebration-text">Happy Valentine's Day ❤️</p>
```

## 🎵 Optional: Add Background Music

1. Find a romantic instrumental song (2-3 minutes)
2. Convert to MP3 format
3. Create folder: `assets/music/`
4. Save as: `romantic-song.mp3`
5. **Uncomment in `index.js`** (lines 382-384):
```javascript
const audio = new Audio('assets/music/romantic-song.mp3');
audio.volume = 0.3;
audio.play();
```

**Music Suggestions:**
- "La Vie En Rose" (instrumental)
- "Can't Help Falling in Love" (instrumental)
- Any soft piano/guitar romantic piece

## 🎨 Advanced: Change Colors

**File:** `style.css` (lines 8-14)
```css
--color-pink-light: #FFB6C1;
--color-pink: #FFC0CB;
--color-pink-hot: #FF69B4;
--color-pink-deep: #FF1493;
--color-lavender: #E6E6FA;
```

Use a color picker to find your favorite shades!

## ⚙️ Advanced: Adjust Behavior

**File:** `index.js`

### Typing Speed
```javascript
speed: 80,  // Lower = faster (try 50-100)
```

### Slideshow Speed
```javascript
interval: 4000,  // Time in milliseconds (4000 = 4 seconds)
```

### NO Button Dodge Distance
```javascript
dodgeDistance: 100,  // How close cursor can get (pixels)
```

### NO Button Messages
```javascript
messages: [
    "Nice try 😜",
    "Add your own messages here!",
    "Make them playful and cute!",
]
```

## 📋 Pre-Launch Checklist

Before showing it to your girlfriend:

- [ ] All photos replaced with real ones
- [ ] Greeting text personalized
- [ ] Photo captions updated
- [ ] GIFs replaced (or verified placeholders look good)
- [ ] Final celebration photo is your best one
- [ ] Tested on your phone (most important!)
- [ ] Tested on desktop browser
- [ ] All text is spell-checked
- [ ] Music added (if desired)
- [ ] Shared with a friend for feedback (optional)

## 🧪 How to Test

1. **Desktop:** 
   - Double-click `open-website.bat`
   - Or open `index.html` in Chrome/Firefox
   - Try to click the NO button (it should dodge!)
   - Click YES to see celebration

2. **Mobile:**
   - Copy the `valentine` folder to your phone
   - Open `index.html` in mobile browser
   - Test the NO button tap dodge
   - Verify all text is readable
   - Check that buttons are easy to tap

## 🚀 How to Share

### Option 1: In Person (Recommended!)
- Open on your laptop/tablet
- Hand it to her
- Watch her reaction 🥰

### Option 2: Send to Her Phone
- Zip the entire `valentine` folder
- Send via WhatsApp/Telegram/Email
- Tell her to unzip and open `index.html`

### Option 3: Host Online (Advanced)
- Use GitHub Pages (free)
- Or Netlify Drop (drag & drop, free)
- Send her the link

## 💡 Pro Tips

1. **Test the NO button yourself first** - Make sure it's playful, not annoying
2. **Keep the slideshow to 4-5 photos** - Too many gets boring
3. **Choose photos with good lighting** - They'll look better
4. **Add captions that reference inside jokes** - More personal!
5. **Test on mobile FIRST** - Most people will view on phones
6. **Have a backup plan** - Screenshot the celebration page just in case!

## ❤️ Final Touch

Consider adding:
- A personal voice message (record and add as audio)
- A video instead of GIFs (use HTML5 video tag)
- More sections with reasons why you love her
- A countdown timer to Valentine's Day

---

**You've got this! Good luck! 💖**

*Remember: It's not about perfection, it's about the thought and effort you put in. She'll love it! 🌹*
