# 🏥 DoutorAgenda

Sistema completo de gerenciamento de clínicas médicas desenvolvido com Next.js, oferecendo uma solução moderna e eficiente para o agendamento de consultas e administração de estabelecimentos de saúde.

## 📋 Sobre o Projeto

O **DoutorAgenda** é uma plataforma web robusta projetada para simplificar a gestão de clínicas médicas. O sistema permite que administradores de clínicas gerenciem médicos, pacientes e agendamentos de forma intuitiva e eficiente, proporcionando uma experiência completa de administração hospitalar.

### ✨ Funcionalidades Principais

- **🔐 Autenticação Segura**
  - Login com email e senha
  - Autenticação via Google OAuth
  - Sessões seguras com Better Auth

- **🏢 Gerenciamento de Clínicas**
  - Cadastro e configuração de estabelecimentos
  - Perfis personalizados para cada clínica

- **👨‍⚕️ Gestão de Médicos**
  - Cadastro completo de profissionais
  - Definição de especialidades
  - Configuração de horários de disponibilidade
  - Preços de consulta personalizados

- **👥 Administração de Pacientes**
  - Registro detalhado de pacientes
  - Histórico de consultas
  - Informações de contato e dados pessoais

- **📅 Sistema de Agendamentos**
  - Agendamento inteligente de consultas
  - Verificação automática de disponibilidade
  - Gestão de horários em tempo real
  - Calendário interativo

- **📊 Dashboard Analítico**
  - Visão geral da clínica
  - Estatísticas de receita e agendamentos
  - Gráficos de performance
  - Relatórios de médicos e especialidades mais procuradas

- **💳 Sistema de Assinaturas**
  - Integração com Stripe para pagamentos
  - Planos de assinatura flexíveis
  - Gerenciamento de cobrança automática

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.3.2** - Framework React com renderização server-side
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface modernos
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React** - Ícones modernos

### Backend & Database
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Neon Database** - Plataforma de banco serverless

### Autenticação & Segurança
- **Better Auth** - Sistema de autenticação moderno
- **Next Safe Action** - Validação segura de ações server-side
- **Zod** - Validação de esquemas TypeScript

### Pagamentos & Assinaturas
- **Stripe** - Processamento de pagamentos
- **@stripe/stripe-js** - SDK JavaScript do Stripe

### Utilitários & Ferramentas
- **TanStack Query** - Gerenciamento de estado servidor
- **React Hook Form** - Formulários performáticos
- **Date-fns & Day.js** - Manipulação de datas
- **Recharts** - Gráficos e visualizações
- **Sonner** - Notificações toast elegantes

### Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Drizzle Kit** - Ferramentas de migração de banco

## 📋 Requisitos do Sistema

### Pré-requisitos
- **Node.js** 18.0.0 ou superior
- **npm** ou **yarn** ou **pnpm**
- **PostgreSQL** 12 ou superior (ou conta no Neon Database)
- **Conta no Google Cloud** (para OAuth)
- **Conta no Stripe** (para pagamentos)

### Variáveis de Ambiente Necessárias
```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🚀 Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/doutor-agenda.git
cd doutor-agenda
```

### 2. Instale as Dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as Variáveis de Ambiente
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

### 4. Configure o Banco de Dados
```bash
# Execute as migrações
npm run db:migrate
# ou
npx drizzle-kit migrate
```

### 5. Inicie o Servidor de Desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

## 💡 Exemplos de Uso

### Criando uma Nova Clínica
1. Acesse a aplicação e faça login
2. Complete o formulário de criação de clínica
3. Configure os dados básicos do estabelecimento

### Cadastrando um Médico
```typescript
// Exemplo de dados para cadastro de médico
const novoMedico = {
  name: "Dr. João Silva",
  email: "joao.silva@email.com",
  phone: "(11) 99999-9999",
  specialty: "Cardiologia",
  availableFromWeekDay: 1, // Segunda-feira
  availableToWeekDay: 5,   // Sexta-feira
  availableFromTime: "08:00",
  availableToTime: "18:00",
  appointmentPriceInCents: 15000 // R$ 150,00
}
```

### Agendando uma Consulta
1. Selecione o médico desejado
2. Escolha a data disponível
3. Selecione um horário livre
4. Confirme o agendamento

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Diretrizes de Contribuição
- Siga os padrões de código estabelecidos (ESLint + Prettier)
- Escreva testes para novas funcionalidades
- Documente mudanças significativas
- Mantenha commits claros e descritivos

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Suporte

Para dúvidas, sugestões ou reportar problemas:

- **Email**: [victormts.s1@gmail.com](mailto:victormts.s1@gmail.com)
- **GitHub**: [@SoulHiro](https://github.com/SoulHiro)
- **LinkedIn**: [Victor M.](https://linkedin.com/in/victormts)

---

<div align="center">
  <p>Desenvolvido com ❤️ para modernizar a gestão de clínicas médicas</p>
  <p>© 2024 DoutorAgenda. Todos os direitos reservados.</p>
</div>
