import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const allPosts = [
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 1}`,
    user: 'Conexão de verdade',
    username: '@conectV',
    message: `Postagem ${i + 1} sobre desconectar e se reconectar com a vida real. ver mais`,
    category: 'Vida Offline',
    avatar: `https://randomuser.me/api/portraits/women/${(i % 10) + 1}.jpg`,
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 11}`,
    user: 'Dicas Desconet',
    username: '@desconetdicas',
    message: `Dica ${i + 1}: 5 ideias para curtir a semana sem celular. ver mais`,
    category: 'Dicas',
    avatar: `https://randomuser.me/api/portraits/men/${(i % 10) + 1}.jpg`,
  })),
];

const categories = ['Todos', 'Vida Offline', 'Dicas'];

export default function CommunityFeedEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [commentingPost, setCommentingPost] = useState(null);
  const [commentText, setCommentText] = useState('');

  const filteredPosts =
    selectedCategory === 'Todos'
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.user}>
          <Text style={{ fontWeight: 'bold' }}>{item.user}</Text> {item.username}
        </Text>
      </View>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.actionsRow}>
        <Text style={styles.actionIcon}>❤️ 120</Text>
        <Text style={styles.actionIcon}>🔁 10</Text>
        <Text style={styles.actionIcon}>💬 6</Text>
        <TouchableOpacity onPress={() => setCommentingPost(item.id)}>
          <Text style={styles.actionIcon}>💬 Comentar</Text>
        </TouchableOpacity>
      </View>
      {commentingPost === item.id && (
        <View style={styles.commentBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu comentário..."
            value={commentText}
            onChangeText={setCommentText}
          />
          <TouchableOpacity onPress={() => {
            console.log('Comentou:', commentText);
            setCommentText('');
            setCommentingPost(null);
          }}>
            <Text style={styles.sendBtn}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <FontAwesome name="bars" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comunidade desconet</Text>
      </View>

      <View style={styles.filterRow}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.filterButton,
              selectedCategory === cat && styles.filterButtonActive,
            ]}>
            <Text
              style={{
                color: selectedCategory === cat ? 'white' : '#3b82f6',
                fontWeight: 'bold',
              }}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3b82f6',
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  menuIcon: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  user: { fontSize: 14 },
  message: { fontSize: 13, color: '#333', marginVertical: 6 },
  actionsRow: { flexDirection: 'row', gap: 16 },
  actionIcon: { fontSize: 12, color: '#444' },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 8,
  },
  sendBtn: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: 12,
    justifyContent: 'center',
  },
  filterButton: {
    borderColor: '#3b82f6',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
  },
  footerIcons: {
    position: 'absolute',
    bottom: 20,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 999,
  },
});
