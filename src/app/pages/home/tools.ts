export interface Tool {
  name: string;
  icon?: string;
  shape?: string;
  glyph?: string;
}

const tool = (name: string, icon?: string, shape = ''): Tool => ({name, icon: icon && `assets/icons/${icon}.svg`, shape});
const glyph = (name: string, icon: string): Tool => ({name, glyph: `url(assets/icons/ui-${icon}.svg)`});

export const TOOLS = {
  java: tool('Java', 'java', 'ic-tall'),
  spring: tool('Spring Boot', 'spring'),
  hibernate: tool('Hibernate', 'hibernate'),
  node: tool('Node.js', 'nodejs'),
  express: tool('Express', 'express', 'ic-wide ic-ink'),
  python: tool('Python', 'python'),
  go: tool('Go', 'go', 'ic-wide'),
  cpp: tool('C/C++', 'c-plusplus'),
  angular: tool('Angular', 'angular'),
  typescript: tool('TypeScript', 'typescript'),
  javascript: tool('JavaScript', 'javascript'),
  html: tool('HTML5', 'html'),
  css: tool('CSS3', 'css'),
  react: tool('React', 'react'),
  vue: tool('Vue.js', 'vue'),
  flutter: tool('Flutter/Dart', 'flutter', 'ic-tall'),
  mysql: tool('MySQL', 'mysql'),
  mariadb: tool('MariaDB', 'mariadb', 'ic-land'),
  postgres: tool('PostgreSQL', 'postgres'),
  sqlserver: glyph('SQL Server', 'database'),
  h2: tool('H2', 'h2database'),
  mongodb: tool('MongoDB', 'mongodb', 'ic-tall'),
  dynamodb: tool('DynamoDB', 'aws-dynamodb'),
  couchdb: tool('CouchDB', 'couchdb', 'ic-land'),
  redis: tool('Redis', 'redis'),
  valkey: tool('Valkey', 'valkey-icon', 'ic-tall'),
  docker: tool('Docker', 'docker', 'ic-land'),
  kubernetes: tool('Kubernetes', 'kubernetes'),
  aws: tool('AWS', 'aws', 'ic-land'),
  gcp: tool('Google Cloud', 'google-cloud'),
  jenkins: tool('Jenkins', 'jenkins', 'ic-tall'),
  actions: tool('GitHub Actions', 'github-actions'),
  caddy: tool('Caddy', 'caddy'),
  cloudflare: tool('Cloudflare', 'cloudflare', 'ic-wide'),
  sentry: tool('Sentry', 'sentry'),
  lambda: tool('AWS Lambda', 'aws-lambda'),
  sqs: tool('Amazon SQS', 'aws-sqs'),
  kms: tool('AWS KMS', 'aws-kms'),
  kong: tool('Kong', 'kong'),
  selenium: tool('Selenium', 'selenium'),
  testcontainers: glyph('Testcontainers', 'container'),
  playwright: tool('Playwright', 'playwright', 'ic-land'),
  vitest: tool('Vitest', 'vitest'),
  claude: tool('Claude Code', 'claude'),
  anthropic: tool('Anthropic', 'anthropic', 'ic-land ic-ink'),
  deepseek: tool('DeepSeek', 'deepseek', 'ic-land'),
  ollama: tool('Ollama', 'ollama', 'ic-tall ic-ink'),
  opencode: tool('OpenCode', 'opencode-icon', 'ic-tall'),
  speckit: tool('Spec Kit', 'github', 'ic-ink'),
} satisfies Record<string, Tool>;

export type ToolId = keyof typeof TOOLS;
