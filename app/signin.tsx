
import { icons } from "@/constants/icons";
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In:', { email, password });
    router.replace('/(tabs)');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign In');
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign In');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image
            source={icons.logo_with_name}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleSignIn}
            >
              <Text style={styles.socialButtonText}>
                <Image
                  source={icons.google}
                  resizeMode="contain"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleFacebookSignIn}
            >
              <Text style={styles.socialButtonText}>
                <Image
                  source={icons.facebook}
                  resizeMode="contain"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleSignIn}
            >
               <Image
                  source={icons.apple}
                  resizeMode="contain"
                />
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Don't have an account?{' '}
            </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View style={styles.illustrationContainer}>
          <Image
            source={icons.main_bottom}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 60,
  },
  formContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  signInButton: {
    backgroundColor: '#7ED7C1',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  signInButtonText: {
    color: '#2C3E50',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#9E9E9E',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 24,
    fontWeight: '600',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 32,

  },
  signUpText: {
    fontSize: 14,
    color: '#616161',
  },
  signUpLink: {
    color: '#7ED7C1',
    fontWeight: '600',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  illustration: {
    width: '100%',
    height: 120,
  },
});