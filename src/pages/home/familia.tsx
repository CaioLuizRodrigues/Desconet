import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function FamilyHomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Olá, Ana! Acompanhe o progresso do Luizinho hoje e envie algo que motive ele a continuar desconectado.</Text>
        </View>

        <View style={styles.profileBox}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>Luizinho</Text>
            <Text style={styles.subtitle}>Suu inhe pian</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '60%' }]} />
          </View>
          <Text style={styles.progressText}>1h 20 offline agora</Text>
        </View>

        <Text style={styles.sectionTitle}>Atividades sugeridas</Text>
        <View style={styles.suggestion}>
          <Text>🌳  Passeio no parque</Text>
        </View>
        <View style={styles.suggestion}>
          <Text>📖  Leia um capítulo do seu livro</Text>
        </View>

        <TouchableOpacity style={styles.newSuggestionBtn}>
          <Text style={styles.newSuggestionText}>+ Enviar nova sugestão</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Desempenho</Text>
        <Image
          source={{ uri: 'https://i.ibb.co/qrcDLdL/grafico-exemplo.png' }}
          style={styles.graph}
          resizeMode="contain"
        />

        <Text style={styles.sectionTitle}>Atividade</Text>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardText}><Text style={{ fontWeight: 'bold' }}>Luizinho</Text> completou 3h offline! 👌</Text>
        </View>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardText}>Você sugeriu: Passeio no parque 🌳 <Text style={{ color: '#22c55e', fontWeight: 'bold' }}>Aceito!</Text></Text>
        </View>
      </ScrollView>

      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="list" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 120 },
  header: { backgroundColor: '#3b82f6', padding: 20, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  headerText: { color: 'white', fontSize: 16, lineHeight: 22 },
  profileBox: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  avatar: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#3b82f6' },
  username: { fontWeight: 'bold', fontSize: 18 },
  subtitle: { color: '#555' },
  progressBarContainer: { paddingHorizontal: 16 },
  progressBar: { backgroundColor: '#e5e7eb', height: 8, borderRadius: 999, overflow: 'hidden', marginTop: 4 },
  progress: { backgroundColor: '#3b82f6', height: '100%' },
  progressText: { marginTop: 6, fontSize: 12 },
  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginHorizontal: 16, marginTop: 24, marginBottom: 8 },
  suggestion: { borderColor: '#3b82f6', borderWidth: 1, borderRadius: 12, padding: 12, marginHorizontal: 16, marginBottom: 8 },
  newSuggestionBtn: { backgroundColor: '#3b82f6', borderRadius: 12, margin: 16, paddingVertical: 12, alignItems: 'center' },
  newSuggestionText: { color: 'white', fontWeight: 'bold' },
  graph: { width: width - 32, height: 160, marginHorizontal: 16, marginBottom: 16 },
  rewardBox: { backgroundColor: '#f1f5f9', marginHorizontal: 16, padding: 12, borderRadius: 12, marginBottom: 8 },
  rewardText: { fontSize: 13 },
  footerIcons: {
    position: 'absolute',
    bottom: 20,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: { backgroundColor: '#3b82f6', padding: 16, borderRadius: 999 },
});
