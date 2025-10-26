```mermaid
graph TD
  A[User] --> B[Login Page]
  B --> C{Valid Credentials?}
  C -->|Yes| D[Dashboard]
  C -->|No| E[Error Message]
