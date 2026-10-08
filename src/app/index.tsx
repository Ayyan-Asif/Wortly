import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return React.createElement(
    ThemedView,
    { style: styles.container },
    React.createElement(
      SafeAreaView,
      { style: styles.safeArea },
      React.createElement(
        View,
        null,
        React.createElement(ThemedText, { type: 'small' }, 'DEUTSCH LERNEN 🇩🇪'),
        React.createElement(ThemedText, { type: 'title' }, 'Willkommen!'),
        React.createElement(
          ThemedText,
          { style: styles.subtitle },
          'Lerne jeden Tag ein bisschen Deutsch.'
        )
      ),
      React.createElement(
        View,
        { style: styles.levelCard },
        React.createElement(
          View,
          null,
          React.createElement(ThemedText, { style: styles.levelLabel }, 'DEIN NIVEAU'),
          React.createElement(ThemedText, { style: styles.level }, 'A1')
        ),
        React.createElement(ThemedText, { style: styles.flag }, '🇩🇪')
      ),
      React.createElement(
        ThemedView,
        { type: 'backgroundElement', style: styles.wordCard },
        React.createElement(ThemedText, { type: 'small' }, 'WORT DES TAGES'),
        React.createElement(ThemedText, { style: styles.word }, 'gemütlich'),
        React.createElement(ThemedText, { style: styles.translation }, 'comfortable · cozy'),
        React.createElement(ThemedText, { style: styles.example }, '„Das Zimmer ist sehr gemütlich.“'),
        React.createElement(
          Pressable,
          {
            style: styles.learnButton,
            onPress: () => router.push('/flashcard'),
          },
          React.createElement(ThemedText, { style: styles.buttonText }, 'Jetzt lernen →')
        )
      ),
      React.createElement(
        ThemedView,
        { type: 'backgroundElement', style: styles.progressCard },
        React.createElement(
          View,
          { style: styles.progressHeader },
          React.createElement(ThemedText, { type: 'subtitle' }, 'Dein Fortschritt'),
          React.createElement(ThemedText, null, '65%')
        ),
        React.createElement(
          View,
          { style: styles.progressBackground },
          React.createElement(View, { style: styles.progressBar })
        ),
        React.createElement(ThemedText, { type: 'small' }, '13 von 20 Lektionen abgeschlossen')
      ),
      React.createElement(ThemedText, { style: styles.footer }, 'Jeden Tag ein bisschen. 💪')
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
    gap: 18,
  },

  subtitle: {
    marginTop: 5,
    opacity: 0.6,
  },

  levelCard: {
    backgroundColor: '#2563EB',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  levelLabel: {
    color: '#DBEAFE',
    fontSize: 11,
    fontWeight: 'bold',
  },

  level: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 3,
  },

  flag: {
    fontSize: 38,
  },

  wordCard: {
    padding: 22,
    borderRadius: 20,
    gap: 8,
  },

  word: {
    fontSize: 38,
    fontWeight: 'bold',
  },

  translation: {
    fontSize: 18,
    opacity: 0.7,
  },

  example: {
    marginTop: 8,
    fontStyle: 'italic',
    opacity: 0.8,
  },

  learnButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  progressCard: {
    padding: 18,
    borderRadius: 18,
    gap: 12,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressBackground: {
    height: 9,
    borderRadius: 5,
    backgroundColor: '#D1D5DB',
    overflow: 'hidden',
  },

  progressBar: {
    width: '65%',
    height: '100%',
    backgroundColor: '#2563EB',
  },

  footer: {
    textAlign: 'center',
    opacity: 0.5,
  },
});