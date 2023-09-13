import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('portugues');

  const [dadosCadastro, setDadosCadastro] = useState(null);

  const handleCadastro = () => {
    const dados = {
      Nome: nome,
      Gênero: genero,
      "Data de Nascimento": dataNascimento,
      Usuário: usuario,
      Senha: senha,
      "E-mail": email,
      "Confirmar E-mail": confirmarEmail,
      CPF: cpf,
      "Idioma do Currículo": idioma,
    };
    setDadosCadastro(dados);
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
      />

      <Text>Gênero:</Text>
      <Picker
        style={styles.input}
        selectedValue={genero}
        onValueChange={(itemValue) => setGenero(itemValue)}
      >
        <Picker.Item label="N/A" value="N/A" />
        <Picker.Item label="Feminino" value="feminino" />
        <Picker.Item label="Masculino" value="masculino" />
      </Picker>

      <Text>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDataNascimento}
        value={dataNascimento}
      />

      <Text>Usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsuario}
        value={usuario}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <Text>Confirme seu E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfirmarEmail}
        value={confirmarEmail}
        keyboardType="email-address"
      />

      <Text>CPF:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCpf}
        value={cpf}
        keyboardType="numeric"
      />

      <Text>Idioma do Currículo:</Text>
      <Picker
        style={styles.input}
        selectedValue={idioma}
        onValueChange={(itemValue) => setIdioma(itemValue)}
      >
        <Picker.Item label="N/A" value="N/A" />
        <Picker.Item label="Português" value="portugues" />
        <Picker.Item label="Inglês" value="ingles" />
        <Picker.Item label="Alemão" value="Alemão" />
        <Picker.Item label="Espanhol" value="Espanhol" />
        <Picker.Item label="Tanto Faz" value="Tanto Faz" />
      </Picker>

      <Button title="CADASTRAR" onPress={handleCadastro} />

      {dadosCadastro && (
        <View style={styles.dadosContainer}>
          <Text>Dados do Cadastro:</Text>
          {Object.entries(dadosCadastro).map(([campo, valor]) => (
            <Text key={campo}>
              {campo}: {valor}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
  dadosContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default CadastroScreen;