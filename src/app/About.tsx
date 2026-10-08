import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* Header */}
          <View style={styles.header}>
            <ThemedText type="small">
              ABOUT WORTLY 🇩🇪
            </ThemedText>

            <ThemedText type="title">
              Learn German.
            </ThemedText>

            <ThemedText style={styles.subtitle}>
              Simple. Every day. Step by step.
            </ThemedText>
          </View>

          {/* Logo / Brand */}
          <View style={styles.logoCard}>
            <ThemedText style={styles.logoLetter}>
              W
            </ThemedText>

            <ThemedText style={styles.logoText}>
              WORTLY
            </ThemedText>

            <ThemedText style={styles.logoSubtitle}>
              Your daily companion for learning German.
            </ThemedText>
          </View>

          {/* About Wortly */}
          <ThemedView
            type="backgroundElement"
            style={styles.card}
          >
            <ThemedText type="subtitle">
              What is Wortly?
            </ThemedText>

            <ThemedText style={styles.description}>
              Wortly is a simple German learning app designed
              for beginners. Learn new words, practice their
              meanings, and build your German vocabulary
              step by step.
            </ThemedText>
          </ThemedView>

          {/* Features */}
          <ThemedView
            type="backgroundElement"
            style={styles.card}
          >
            <ThemedText type="subtitle">
              What can you do?
            </ThemedText>

            {/* Flashcards */}
            <View style={styles.feature}>
              <ThemedText style={styles.featureIcon}>
                📚
              </ThemedText>

              <View style={styles.featureText}>
                <ThemedText style={styles.featureTitle}>
                  Flashcards
                </ThemedText>

                <ThemedText style={styles.featureDescription}>
                  Practice German words and their English
                  translations.
                </ThemedText>
              </View>
            </View>

            {/* Word of the Day */}
            <View style={styles.feature}>
              <ThemedText style={styles.featureIcon}>
                💡
              </ThemedText>

              <View style={styles.featureText}>
                <ThemedText style={styles.featureTitle}>
                  Word of the Day
                </ThemedText>

                <ThemedText style={styles.featureDescription}>
                  Discover and learn a new German word every day.
                </ThemedText>
              </View>
            </View>

            {/* Progress */}
            <View style={styles.feature}>
              <ThemedText style={styles.featureIcon}>
                📈
              </ThemedText>

              <View style={styles.featureText}>
                <ThemedText style={styles.featureTitle}>
                  Track Your Progress
                </ThemedText>

                <ThemedText style={styles.featureDescription}>
                  Keep track of your learning progress as you
                  improve your German.
                </ThemedText>
              </View>
            </View>
          </ThemedView>

          {/* Current Level */}
          <View style={styles.levelCard}>
            <View>
              <ThemedText style={styles.levelLabel}>
                CURRENT LEVEL
              </ThemedText>

              <ThemedText style={styles.level}>
                A1
              </ThemedText>
            </View>

            <ThemedText style={styles.flag}>
              🇩🇪
            </ThemedText>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <ThemedText style={styles.footerText}>
              Good luck with your German learning! 💙
            </ThemedText>

            <ThemedText style={styles.version}>
              Wortly • Version 1.0.0
            </ThemedText>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 110,
    gap: 18,
  },

  header: {
    marginBottom: 5,
  },

  subtitle: {
    marginTop: 6,
    opacity: 0.6,
  },

  logoCard: {
    backgroundColor: '#0F172A',
    borderRadius: 22,
    paddingVertical: 28,
    alignItems: 'center',
  },

  logoLetter: {
    fontSize: 52,
    fontWeight: '900',
    color: '#3B82F6',
  },

  logoText: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 4,
    color: '#FFFFFF',
    marginTop: 2,
  },

  logoSubtitle: {
    color: '#CBD5E1',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },

  card: {
    padding: 20,
    borderRadius: 20,
    gap: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    opacity: 0.75,
  },

  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  featureIcon: {
    fontSize: 28,
  },

  featureText: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.6,
    marginTop: 2,
  },

  levelCard: {
    backgroundColor: '#2563EB',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  levelLabel: {
    color: '#DBEAFE',
    fontSize: 11,
    fontWeight: '700',
  },

  level: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 3,
  },

  flag: {
    fontSize: 42,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 5,
    gap: 6,
  },

  footerText: {
    fontSize: 15,
    opacity: 0.7,
  },

  version: {
    fontSize: 12,
    opacity: 0.4,
  },
});