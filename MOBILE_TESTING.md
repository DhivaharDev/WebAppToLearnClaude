# Testing on Android Mobile Device

## Method 1: Local Network Access (Recommended for Testing)

### Steps:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Find your computer's local IP address:**

   **On Linux/Mac:**
   ```bash
   hostname -I | awk '{print $1}'
   # or
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```

   **On Windows:**
   ```bash
   ipconfig
   # Look for "IPv4 Address" under your active network adapter
   ```

3. **Access from your Android phone:**
   - Make sure your phone is on the same WiFi network as your computer
   - Open your phone's browser
   - Navigate to: `http://YOUR_IP_ADDRESS:3000`
   - Example: `http://192.168.1.100:3000`

### Troubleshooting:
- Make sure your firewall allows connections on port 3000
- Both devices must be on the same WiFi network
- Use the private IP (192.168.x.x or 10.x.x.x), not 127.0.0.1

---

## Method 2: Using Ngrok (For Remote Testing)

If you want to test from anywhere without being on the same network:

1. **Install ngrok:**
   ```bash
   npm install -g ngrok
   ```

2. **Start your dev server:**
   ```bash
   npm run dev
   ```

3. **In another terminal, create a tunnel:**
   ```bash
   ngrok http 3000
   ```

4. **Use the provided URL** (like `https://xxxx-xxx-xxx-xxx.ngrok-free.app`) on your phone

---

## Method 3: Deploy to Vercel (For Permanent Access)

For a production deployment accessible from anywhere:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Access the provided URL** from your phone

---

## Testing Checklist on Mobile:

- [ ] Test responsive layout (should adapt to mobile screen)
- [ ] Test Three.js background animation performance
- [ ] Test input field (keyboard should appear)
- [ ] Test Format button functionality
- [ ] Test Copy to Clipboard (should show toast notification)
- [ ] Test Clear button
- [ ] Test Include Brackets checkbox
- [ ] Test with various input strings
- [ ] Check toast notifications appear correctly
- [ ] Test landscape and portrait orientations
