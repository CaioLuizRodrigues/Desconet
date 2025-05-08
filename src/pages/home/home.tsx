import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const conexoes = [
    { id: 1, nome: 'Ana', online: true, img: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, nome: 'Bruna', online: false, img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, nome: 'Carla', online: false, img: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, nome: 'Duda', online: true, img: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, nome: 'Eva', online: true, img: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  const posts = [
    {
      id: 1,
      nome: 'Conexão de verdade',
      usuario: '@conectEV',
      mensagem:
        'Ei, pessoal! A galera da Conexão de verdade está organizando uma tarde muito especial para você sair da rotina virtual. Ver mais',
    },
    {
      id: 2,
      nome: 'Vida fora de tela',
      usuario: '@VFtela',
      mensagem:
        'Olá rede, o grupo da vida fora de tela está organizando uma corrida de 15km pelas ruas do Recife. Venham participar! Ver mais',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.topContainer}>
          <View style={styles.searchRow}>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TextInput
              placeholder="Busque novas conexões ou comunidades"
              placeholderTextColor="#ccc"
              style={styles.input}
            />
          </View>
          <Text style={styles.saudacao}>
            Olá, <Text style={styles.nome}>Luizinho</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.titulo}>Conexões</Text>
          <View style={styles.conexoes}>
            {conexoes.map((pessoa) => (
              <View key={pessoa.id} style={styles.conexaoItem}>
                <Image source={{ uri: pessoa.img }} style={styles.foto} />
                <View
                  style={[
                    styles.status,
                    { backgroundColor: pessoa.online ? '#22c55e' : '#ef4444' },
                  ]}
                />
              </View>
            ))}
          </View>

          <Text style={styles.titulo}>Dicas do dia</Text>
          {['Faça um passeio com seu pet', 'Leia um capítulo do seu livro', 'Faça uma corrida matinal'].map((dica, i) => (
            <TouchableOpacity key={i} style={styles.card}>
              <Text style={styles.cardTexto}>{dica}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.cardCinza}>
            <Text style={styles.cardCinzaTitulo}>Acompanhe seu tempo offline</Text>
            <Text style={styles.cardLink}>10 horas</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 32 }}>
            {posts.map((post) => (
              <View key={post.id} style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Image
                  source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
                  style={styles.fotoPost}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>{post.nome} <Text style={{ color: '#555' }}>{post.usuario}</Text></Text>
                  <Text style={{ color: '#333', marginTop: 4, fontSize: 13 }}>{post.mensagem}</Text>
                  <View style={{ flexDirection: 'row', marginTop: 6, gap: 16 }}>
                    <Text style={{ fontSize: 12 }}>❤️ 123</Text>
                    <Text style={{ fontSize: 12 }}>🔁 78</Text>
                    <Text style={{ fontSize: 12 }}>💬 19</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.iconeRowFixed}>
        <TouchableOpacity style={styles.iconeBotao}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconeBotao}>
          <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconeBotao}>
          <FontAwesome name="comment" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: '#fff' },
  content: { alignItems: 'center', paddingBottom: 120 },
  topContainer: {
    backgroundColor: '#3b82f6',
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: width,
  },
  searchRow: { flexDirection: 'row', alignItems: 'center' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 12,
    flex: 1,
    fontSize: 14,
  },
  saudacao: { color: 'white', textAlign: 'right', marginTop: 8, fontSize: 16 },
  nome: { fontWeight: 'bold' },
  section: { width: width, paddingHorizontal: 16, paddingTop: 24 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  conexoes: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  conexaoItem: { position: 'relative' },
  foto: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: '#3b82f6' },
  status: { position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: 'white' },
  card: { backgroundColor: '#3b82f6', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, marginBottom: 8 },
  cardTexto: { color: 'white', fontSize: 14 },
  cardCinza: { backgroundColor: '#f1f5f9', borderRadius: 12, padding: 16, marginTop: 24 },
  cardCinzaTitulo: { fontWeight: 'bold', marginBottom: 4 },
  cardLink: { color: '#3b82f6', fontWeight: 'bold' },
  fotoPost: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#3b82f6', marginRight: 10 },
  iconeRowFixed: {
    position: 'absolute',
    bottom: 20,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  iconeBotao: { backgroundColor: '#3b82f6', padding: 16, borderRadius: 999 },
});
