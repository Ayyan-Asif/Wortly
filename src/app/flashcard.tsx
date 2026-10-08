import { useState } from 'react';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const words = [
  {
    german: 'Hallo',
    english: 'Hello',
    example: 'Hallo, wie geht es dir?',
    translation: 'Hello, how are you?',
  },
  {
    german: 'Guten Morgen',
    english: 'Good morning',
    example: 'Guten Morgen! Wie geht es dir?',
    translation: 'Good morning! How are you?',
  },
  {
    german: 'Guten Tag',
    english: 'Good day',
    example: 'Guten Tag, Herr Müller.',
    translation: 'Good day, Mr. Müller.',
  },
  {
    german: 'Guten Abend',
    english: 'Good evening',
    example: 'Guten Abend! Wie geht es Ihnen?',
    translation: 'Good evening! How are you?',
  },
  {
    german: 'Gute Nacht',
    english: 'Good night',
    example: 'Gute Nacht und bis morgen!',
    translation: 'Good night and see you tomorrow!',
  },
  {
    german: 'Tschüss',
    english: 'Bye',
    example: 'Tschüss! Bis morgen.',
    translation: 'Bye! See you tomorrow.',
  },
  {
    german: 'Auf Wiedersehen',
    english: 'Goodbye',
    example: 'Auf Wiedersehen! Bis nächste Woche.',
    translation: 'Goodbye! See you next week.',
  },
  {
    german: 'Danke',
    english: 'Thank you',
    example: 'Danke für deine Hilfe.',
    translation: 'Thank you for your help.',
  },
  {
    german: 'Bitte',
    english: 'Please / You’re welcome',
    example: 'Bitte, setzen Sie sich.',
    translation: 'Please, have a seat.',
  },
  {
    german: 'Entschuldigung',
    english: 'Excuse me / Sorry',
    example: 'Entschuldigung, wo ist der Bahnhof?',
    translation: 'Excuse me, where is the train station?',
  },
  {
    german: 'Ja',
    english: 'Yes',
    example: 'Ja, ich komme morgen.',
    translation: 'Yes, I am coming tomorrow.',
  },
  {
    german: 'Nein',
    english: 'No',
    example: 'Nein, ich habe keine Zeit.',
    translation: 'No, I do not have time.',
  },

  {
    german: 'Freund',
    english: 'Friend',
    example: 'Das ist mein Freund.',
    translation: 'That is my friend.',
  },
  {
    german: 'Freundin',
    english: 'Female friend',
    example: 'Meine Freundin wohnt in Berlin.',
    translation: 'My female friend lives in Berlin.',
  },
  {
    german: 'Familie',
    english: 'Family',
    example: 'Meine Familie ist groß.',
    translation: 'My family is big.',
  },
  {
    german: 'Mutter',
    english: 'Mother',
    example: 'Meine Mutter kocht heute.',
    translation: 'My mother is cooking today.',
  },
  {
    german: 'Vater',
    english: 'Father',
    example: 'Mein Vater arbeitet heute.',
    translation: 'My father is working today.',
  },
  {
    german: 'Bruder',
    english: 'Brother',
    example: 'Mein Bruder ist zwanzig Jahre alt.',
    translation: 'My brother is twenty years old.',
  },
  {
    german: 'Schwester',
    english: 'Sister',
    example: 'Meine Schwester lernt Deutsch.',
    translation: 'My sister is learning German.',
  },
  {
    german: 'Kind',
    english: 'Child',
    example: 'Das Kind spielt im Garten.',
    translation: 'The child is playing in the garden.',
  },

  {
    german: 'Haus',
    english: 'House',
    example: 'Mein Haus ist klein.',
    translation: 'My house is small.',
  },
  {
    german: 'Wohnung',
    english: 'Apartment',
    example: 'Ich wohne in einer kleinen Wohnung.',
    translation: 'I live in a small apartment.',
  },
  {
    german: 'Zimmer',
    english: 'Room',
    example: 'Mein Zimmer ist sehr hell.',
    translation: 'My room is very bright.',
  },
  {
    german: 'Küche',
    english: 'Kitchen',
    example: 'Die Küche ist sauber.',
    translation: 'The kitchen is clean.',
  },
  {
    german: 'Tür',
    english: 'Door',
    example: 'Die Tür ist offen.',
    translation: 'The door is open.',
  },
  {
    german: 'Fenster',
    english: 'Window',
    example: 'Das Fenster ist geschlossen.',
    translation: 'The window is closed.',
  },

  {
    german: 'Essen',
    english: 'Food',
    example: 'Das Essen ist lecker.',
    translation: 'The food is delicious.',
  },
  {
    german: 'Wasser',
    english: 'Water',
    example: 'Ich trinke viel Wasser.',
    translation: 'I drink a lot of water.',
  },
  {
    german: 'Brot',
    english: 'Bread',
    example: 'Ich esse gern Brot.',
    translation: 'I like eating bread.',
  },
  {
    german: 'Milch',
    english: 'Milk',
    example: 'Ich trinke morgens Milch.',
    translation: 'I drink milk in the morning.',
  },
  {
    german: 'Kaffee',
    english: 'Coffee',
    example: 'Ich trinke jeden Morgen Kaffee.',
    translation: 'I drink coffee every morning.',
  },
  {
    german: 'Tee',
    english: 'Tea',
    example: 'Möchtest du einen Tee?',
    translation: 'Would you like a tea?',
  },
  {
    german: 'Apfel',
    english: 'Apple',
    example: 'Der Apfel ist rot.',
    translation: 'The apple is red.',
  },
  {
    german: 'Banane',
    english: 'Banana',
    example: 'Die Banane ist gelb.',
    translation: 'The banana is yellow.',
  },

  {
    german: 'Schule',
    english: 'School',
    example: 'Die Schule beginnt um acht Uhr.',
    translation: 'School starts at eight o’clock.',
  },
  {
    german: 'Universität',
    english: 'University',
    example: 'Ich studiere an der Universität.',
    translation: 'I study at the university.',
  },
  {
    german: 'Lehrer',
    english: 'Teacher',
    example: 'Der Lehrer spricht Deutsch.',
    translation: 'The teacher speaks German.',
  },
  {
    german: 'Student',
    english: 'Student',
    example: 'Ich bin Student.',
    translation: 'I am a student.',
  },
  {
    german: 'Arbeit',
    english: 'Work',
    example: 'Ich gehe zur Arbeit.',
    translation: 'I am going to work.',
  },
  {
    german: 'Büro',
    english: 'Office',
    example: 'Mein Büro ist in der Stadt.',
    translation: 'My office is in the city.',
  },

  {
    german: 'Stadt',
    english: 'City',
    example: 'Berlin ist eine große Stadt.',
    translation: 'Berlin is a big city.',
  },
  {
    german: 'Bahnhof',
    english: 'Train station',
    example: 'Der Bahnhof ist hier.',
    translation: 'The train station is here.',
  },
  {
    german: 'Straße',
    english: 'Street',
    example: 'Ich wohne in dieser Straße.',
    translation: 'I live on this street.',
  },
  {
    german: 'Auto',
    english: 'Car',
    example: 'Mein Auto ist neu.',
    translation: 'My car is new.',
  },
  {
    german: 'Bus',
    english: 'Bus',
    example: 'Der Bus kommt um acht Uhr.',
    translation: 'The bus comes at eight o’clock.',
  },
  {
    german: 'Zug',
    english: 'Train',
    example: 'Der Zug fährt nach Berlin.',
    translation: 'The train goes to Berlin.',
  },

  {
    german: 'gehen',
    english: 'to go',
    example: 'Ich gehe zur Schule.',
    translation: 'I go to school.',
  },
  {
    german: 'kommen',
    english: 'to come',
    example: 'Ich komme aus Pakistan.',
    translation: 'I come from Pakistan.',
  },
  {
    german: 'machen',
    english: 'to do / make',
    example: 'Was machst du heute?',
    translation: 'What are you doing today?',
  },
  {
    german: 'lernen',
    english: 'to learn',
    example: 'Ich lerne Deutsch.',
    translation: 'I am learning German.',
  },
  {
    german: 'sprechen',
    english: 'to speak',
    example: 'Ich spreche ein bisschen Deutsch.',
    translation: 'I speak a little German.',
  },
  {
    german: 'lesen',
    english: 'to read',
    example: 'Ich lese ein Buch.',
    translation: 'I am reading a book.',
  },
  {
    german: 'schreiben',
    english: 'to write',
    example: 'Ich schreibe eine E-Mail.',
    translation: 'I am writing an email.',
  },
  {
    german: 'essen',
    english: 'to eat',
    example: 'Wir essen zusammen.',
    translation: 'We eat together.',
  },
  {
    german: 'trinken',
    english: 'to drink',
    example: 'Ich trinke Wasser.',
    translation: 'I drink water.',
  },
  {
    german: 'schlafen',
    english: 'to sleep',
    example: 'Ich schlafe acht Stunden.',
    translation: 'I sleep eight hours.',
  },
  {
    german: 'arbeiten',
    english: 'to work',
    example: 'Ich arbeite am Montag.',
    translation: 'I work on Monday.',
  },

  {
    german: 'groß',
    english: 'big / tall',
    example: 'Das Haus ist groß.',
    translation: 'The house is big.',
  },
  {
    german: 'klein',
    english: 'small',
    example: 'Die Wohnung ist klein.',
    translation: 'The apartment is small.',
  },
  {
    german: 'gut',
    english: 'good',
    example: 'Das Essen ist gut.',
    translation: 'The food is good.',
  },
  {
    german: 'schlecht',
    english: 'bad',
    example: 'Das Wetter ist schlecht.',
    translation: 'The weather is bad.',
  },
  {
    german: 'neu',
    english: 'new',
    example: 'Mein Handy ist neu.',
    translation: 'My phone is new.',
  },
  {
    german: 'alt',
    english: 'old',
    example: 'Das Auto ist alt.',
    translation: 'The car is old.',
  },
  {
    german: 'schön',
    english: 'beautiful / nice',
    example: 'Das Wetter ist schön.',
    translation: 'The weather is nice.',
  },
  {
    german: 'heute',
    english: 'today',
    example: 'Heute lerne ich Deutsch.',
    translation: 'Today I am learning German.',
  },
  {
    german: 'morgen',
    english: 'tomorrow',
    example: 'Morgen habe ich frei.',
    translation: 'Tomorrow I am free.',
  },
  {
    german: 'gestern',
    english: 'yesterday',
    example: 'Gestern war ich zu Hause.',
    translation: 'Yesterday I was at home.',
  },
];
export default function FlashcardScreen() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);

  const word = words[currentWord];

  const nextWord = () => {
    setCurrentWord((previous) => {
      if (previous === words.length - 1) {
        return 0;
      }

      return previous + 1;
    });

    setShowTranslation(true);
  };

  const previousWord = () => {
    setCurrentWord((previous) => {
      if (previous === 0) {
        return words.length - 1;
      }

      return previous - 1;
    });

    setShowTranslation(true);
  };

  const toggleTranslation = () => {
    setShowTranslation((previous) => !previous);
  };

  const progress = ((currentWord + 1) / words.length) * 100;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.smallText}>
              DEUTSCH LERNEN 🇩🇪
            </Text>

            <Text style={styles.title}>
              Vokabeln
            </Text>
          </View>

          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              A1
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>
              Wort {currentWord + 1} von {words.length}
            </Text>

            <Text style={styles.progressText}>
              {Math.round(progress)}%
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${progress}%`,
                },
              ]}
            />
          </View>
        </View>

        {/* Flashcard */}
        <View style={styles.card}>
          <Text style={styles.category}>
            WORTSCHATZ • A1
          </Text>

          <Text style={styles.germanWord}>
            {word.german}
          </Text>

          {showTranslation ? (
            <View style={styles.translationContainer}>
              <Text style={styles.englishWord}>
                {word.english}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.exampleLabel}>
                BEISPIEL
              </Text>

              <Text style={styles.example}>
                „{word.example}“
              </Text>

              <Text style={styles.translation}>
                {word.translation}
              </Text>
            </View>
          ) : (
            <View style={styles.hiddenContainer}>
              <Text style={styles.hiddenIcon}>
                ?
              </Text>

              <Text style={styles.hiddenText}>
                Was bedeutet dieses Wort?
              </Text>
            </View>
          )}

          {/* Reveal Button */}
          <Pressable
            style={({ pressed }) => [
              styles.revealButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={toggleTranslation}
          >
            <Text style={styles.revealText}>
              {showTranslation
                ? 'Übersetzung verstecken'
                : 'Übersetzung anzeigen'}
            </Text>
          </Pressable>
        </View>

        {/* Navigation */}
        <View style={styles.navigation}>
          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={previousWord}
          >
            <Text style={styles.secondaryButtonText}>
              ← Zurück
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.nextButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={nextWord}
          >
            <Text style={styles.nextButtonText}>
              Nächstes Wort →
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Jeden Tag ein bisschen. 💪
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  headerTextContainer: {
    flex: 1,
    paddingRight: 15,
  },

  smallText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
    letterSpacing: 1,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginTop: 5,
  },

  levelBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  levelText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },

  progressSection: {
    marginBottom: 20,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  progressText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
  },

  progressBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 28,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 4,
  },

  category: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 1,
    marginBottom: 20,
  },

  germanWord: {
    fontSize: 40,
    fontWeight: '800',
    color: '#2563EB',
    textAlign: 'center',
  },

  translationContainer: {
    width: '100%',
    alignItems: 'center',
  },

  englishWord: {
    fontSize: 20,
    color: '#374151',
    marginTop: 10,
    textAlign: 'center',
  },

  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },

  exampleLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 1,
  },

  example: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#374151',
    textAlign: 'center',
    marginTop: 8,
  },

  translation: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 6,
  },

  hiddenContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },

  hiddenIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EFF6FF',
    color: '#2563EB',
    textAlign: 'center',
    lineHeight: 42,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },

  hiddenText: {
    fontSize: 17,
    color: '#9CA3AF',
    textAlign: 'center',
  },

  revealButton: {
    marginTop: 22,
    paddingVertical: 11,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
  },

  revealText: {
    color: '#2563EB',
    fontWeight: '700',
    fontSize: 13,
  },

  navigation: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },

  secondaryButton: {
    flex: 1,
    minHeight: 52,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#374151',
    fontWeight: '700',
    fontSize: 14,
  },

  nextButton: {
    flex: 1.5,
    minHeight: 52,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    marginTop: 25,
    fontSize: 13,
  },
});