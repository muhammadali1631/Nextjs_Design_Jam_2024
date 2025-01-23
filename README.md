# True Buy Marketplace

## Overview
True Buy is a feature-rich e-commerce marketplace built using modern web technologies. The project includes functionalities such as product listing, cart management, user authentication, and staging deployment for testing and refinement.

---

## Key Features
- **Dynamic Product Listing**: Data fetched from Sanity CMS using GROQ queries.
- **Cart Functionality**: Add, update, and remove items with persistence via LocalStorage.
- **User Authentication**: Implemented using Clerk for secure Sign-Up and Sign-In.
- **Search and Filtering**: Basic search functionality and product filtration (under refinement).
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Staging Environment**: Hosted on Vercel for production-like testing.

---

## Project Structure
```
src/              - Application source code.
documents/        - Reports and documentation from Days 1 to 6.
README.md         - Summary of the project.
.env.local      - Example of environment variables used.
```

---

## Deployment Details
- **Hosting Platform**: Vercel
- **Staging Link**: [Insert Staging Link Here]
- **Environment Variables**:
  ```env
  NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
  NEXT_PUBLIC_SANITY_DATASET=production
  API_KEY=your_api_key
  ```

---

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadali1631/Nextjs_Design_Jam_2024
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add environment variables:
   - Create a `.env` file in the root directory.
   - Add variables as per `.env.local`.
4. Run the application locally:
   ```bash
   npm run dev
   ```

---

## Testing
1. **Functional Testing**:
   - Verified workflows: product listing, cart operations, and navigation.
2. **Performance Testing**:
   - Used GTmetrix to achieve a performance score of 99.
3. **Security Testing**:
   - Validated input fields and ensured secure API key management.

---

## Folder Organization
- `src/` contains the core application code.
- `documents/` stores detailed reports for each hackathon day.

---

## Acknowledgments
Special thanks to the GIAIC instructors and team members for their guidance and support throughout the Marketplace Hackathon.

---

## Future Improvements
- Optimize product filtering and search functionality.
- Enhance UI responsiveness for edge cases.
