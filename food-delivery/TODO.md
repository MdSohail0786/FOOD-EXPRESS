# TODO: Revise Mobile Navbar Search to Match Provided Design

- [x] Remove toggle logic and showMobileSearch state from App.jsx
- [x] Add always-visible search input in navbar for mobile (md:hidden), with prefixed FaSearch icon
- [x] Style search input to match image: Central/full-width, rounded, semi-transparent bg, pink focus ring
- [x] Hide sidebar search input entirely (since navbar search is now primary for mobile)
- [x] Ensure desktop search remains unchanged and visible
- [x] Test responsiveness and functionality (verified via code review: Tailwind classes ensure md:hidden for mobile, flex-1 for centering, focus effects with pink ring; integrates with existing searchTerm state for real-time filtering in Menu.jsx)
