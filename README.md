# TestTask - React Native App 🚀

A modern React Native application built with TypeScript, featuring hotel booking functionality and a clean, responsive UI.

## ✨ Features

- **Cross-platform**: iOS and Android support
- **TypeScript**: Full type safety and better development experience
- **Modern Navigation**: React Navigation v6 with tab and stack navigation
- **Custom Components**: Reusable UI components with consistent design system
- **Font Support**: Custom Poppins font family integration
- **SVG Support**: Vector graphics support with react-native-svg

## 🛠 Tech Stack

- **React Native**: 0.75.4
- **TypeScript**: 5.0.4
- **Navigation**: @react-navigation/native, @react-navigation/bottom-tabs, @react-navigation/stack
- **State Management**: React Hooks
- **Styling**: React Native StyleSheet
- **Package Manager**: Yarn 3.6.4

## 📱 Screens

- **Explore**: Hotel listing and details
- **Stadiums**: Stadium information
- **Contacts**: Contact management
- **Information**: App information

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn 3.6.4 or later
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd TestTask
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

### Running the App

#### Android

```bash
# Start Metro bundler
yarn start

# Run on Android device/emulator
yarn android
```

#### iOS

```bash
# Start Metro bundler
yarn start

# Run on iOS simulator/device
yarn ios
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HotelCard.tsx   # Hotel card component
│   ├── PrimaryButton.tsx # Primary button component
│   └── Text.tsx        # Custom text component
├── config/              # Configuration files
│   ├── Colors.tsx      # Color palette
│   └── utils.ts        # Utility functions
├── models/              # TypeScript interfaces and types
│   └── hotel.ts        # Hotel data model
├── navigation/          # Navigation configuration
│   ├── ExploreStack.tsx # Explore screen stack
│   └── TabNavigation.tsx # Main tab navigation
├── screens/             # Screen components
│   ├── contacts/        # Contact screens
│   ├── explore/         # Hotel exploration screens
│   ├── Information/     # Information screens
│   └── stadiums/        # Stadium screens
└── mockData/            # Mock data for development
    └── hotel.ts         # Sample hotel data
```

## 🎨 Design System

### Colors

The app uses a carefully crafted color palette:

- **Primary**: Orange-based colors (#F49300, #F8B34D)
- **Secondary**: Green-based colors (#1C8E00, #BBEFAD)
- **Gray Scale**: Neutral colors for text and backgrounds

### Typography

- **Font Family**: Poppins (Regular, Medium, SemiBold, Bold)
- **Text Types**: little, bodyS, bodyM, bodyMRegular, subTitle, title

## 🧪 Testing

```bash
# Run tests
yarn test

# Run tests in watch mode
yarn test --watch
```

## 📝 Code Quality

### Linting

```bash
# Run ESLint
yarn lint

# Fix auto-fixable issues
yarn lint --fix
```

### Formatting

The project uses Prettier for consistent code formatting. Configure your editor to format on save or run:

```bash
# Format all files
npx prettier --write .
```

## 🔧 Configuration Files

- **TypeScript**: `tsconfig.json` - TypeScript configuration
- **ESLint**: `.eslintrc.js` - Code linting rules
- **Prettier**: `.prettierrc.js` - Code formatting rules
- **Metro**: `metro.config.js` - React Native bundler configuration
- **Babel**: `babel.config.js` - JavaScript transpilation

## 📱 Platform-Specific

### Android

- Minimum SDK: 21
- Target SDK: 33
- Custom fonts in `android/app/src/main/assets/fonts/`

### iOS

- Minimum iOS: 12.4
- Custom fonts in `ios/Test/Info.plist`

## 🚀 Build & Deploy

### Android APK

```bash
cd android
./gradlew assembleRelease
```

### iOS Archive

```bash
cd ios
xcodebuild -workspace Test.xcworkspace -scheme Test archive
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ using React Native**
