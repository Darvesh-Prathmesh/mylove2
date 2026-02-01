# 🎞️ Giphy API Setup Guide

## Why Use Giphy API?

With Giphy API, your website will show **different romantic GIFs every time** it loads! This makes the experience feel fresh and exciting.

**Without API:** Website uses the same fallback GIFs (still works great!)  
**With API:** Random cute/romantic GIFs on every visit! 🎉

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Free API Key

1. **Go to Giphy Developers:**
   👉 https://developers.giphy.com/

2. **Click "Create an App"**
   - Sign up if you don't have an account (free!)
   - Log in if you already have one

3. **Select "API"**
   - Choose "API" (not SDK)

4. **Fill in App Details:**
   - **App Name:** Valentine Proposal (or anything you want)
   - **App Description:** Personal Valentine's Day website
   - **Check the box:** I agree to the terms

5. **Click "Create App"**

6. **Copy Your API Key:**
   - You'll see a long string like: `abc123XYZ456...`
   - Copy this entire key

### Step 2: Add Key to Your Website

1. **Open `script.js`** in your code editor

2. **Find line 11:**
   ```javascript
   apiKey: 'YOUR_GIPHY_API_KEY_HERE',
   ```

3. **Replace with your key:**
   ```javascript
   apiKey: 'abc123XYZ456...',  // ← Paste your actual key here
   ```

4. **Save the file**

### Step 3: Test It!

1. Open `index.html` in your browser
2. Play the mini-game
3. Watch for GIFs to load
4. Refresh page - you should see different GIFs!

## ✅ Verification

### How to Know It's Working:

1. **Open browser console** (F12)
2. Look for any errors
3. If no errors and GIFs load → Success! 🎉
4. Each refresh should show different GIFs

### If GIFs Don't Load:

Don't worry! The website automatically uses fallback GIFs. It will still work perfectly.

**Possible reasons:**
- API key not pasted correctly
- No internet connection
- Giphy API rate limit reached (unlikely with free tier)

## 🎨 Customize GIF Search Terms

Want different types of GIFs? Edit the search terms!

**File:** `script.js` (lines 13-17)

```javascript
searchTerms: {
    intro: 'cute love bear',              // ← Change this
    question: 'romantic hearts valentine', // ← Change this
    celebration: 'happy celebration love'  // ← Change this
}
```

### Suggested Search Terms:

**For Intro:**
- `cute love bear`
- `romantic couple animation`
- `love hearts cute`
- `valentine bear hug`

**For Question:**
- `romantic hearts valentine`
- `love proposal animation`
- `hearts floating romantic`
- `valentine question`

**For Celebration:**
- `happy celebration love`
- `excited happy couple`
- `celebration hearts confetti`
- `yay celebration cute`

## 🔧 Advanced Configuration

### Change Number of GIFs to Fetch:
```javascript
limit: 20,  // Fetches 20 GIFs, picks random one
```

### Change Content Rating:
```javascript
rating: 'g'  // Options: 'g', 'pg', 'pg-13', 'r'
```
**Recommended:** Keep it at 'g' for family-friendly content

## 📊 API Limits (Free Tier)

Giphy's free tier is very generous:
- **42 requests per hour** per IP
- **1000 requests per day** per API key

For a personal Valentine website, this is more than enough!

## 🐛 Troubleshooting

### Error: "Invalid API Key"
**Fix:** Double-check you copied the entire key correctly

### Error: "Rate Limit Exceeded"
**Fix:** Wait an hour, or website will use fallback GIFs

### GIFs Load Slowly
**Fix:** Normal! GIFs are large files. Fallbacks load instantly.

### Same GIF Appears Multiple Times
**Fix:** Increase `limit` value to fetch more GIFs

## 🎯 Without Giphy API

**Don't want to use the API?** No problem!

The website works perfectly with fallback GIFs. Just leave the API key as:
```javascript
apiKey: 'YOUR_GIPHY_API_KEY_HERE',
```

**Fallback GIFs used:**
- Intro: Cute bear love animation
- Question: Romantic hearts
- Celebration: Happy celebration

These are hosted on Giphy's CDN and work great!

## 💡 Pro Tips

1. **Test different search terms** - Find the perfect vibe
2. **Keep rating at 'g'** - Ensures appropriate content
3. **Don't share your API key** - Keep it private
4. **Refresh to see variety** - Each load picks random GIF

## 🌟 Benefits of Using API

### With API:
- ✅ Fresh GIFs every visit
- ✅ Variety keeps it interesting
- ✅ Feels more dynamic
- ✅ Can customize search terms

### Without API:
- ✅ Still works perfectly
- ✅ Faster loading (cached)
- ✅ Consistent experience
- ✅ No setup needed

## 📝 Summary

1. Go to https://developers.giphy.com/
2. Create free account
3. Create an app
4. Copy API key
5. Paste in `script.js` line 11
6. Save and test!

**Total time:** ~5 minutes  
**Cost:** FREE forever  
**Result:** Dynamic, fresh GIFs every time! 🎉

---

**Need help?** Check the browser console (F12) for error messages.

**Don't want to use it?** No worries! Fallback GIFs work great! 💖
