# GitHub Repository Configuration

## Repository Settings

### 1. General Settings
- **Repository name**: `scaletone`
- **Description**: `Beautiful, accessible theme generator for shadcn/ui and Radix UI using Radix Colors`
- **Website**: `https://scaletone.mandalor.studio`
- **Topics**: `shadcn-ui`, `radix-ui`, `radix-colors`, `theme-generator`, `tailwindcss`, `nextjs`, `typescript`
- **Visibility**: ✅ Public
- **Features**:
  - ✅ Issues
  - ✅ Projects  
  - ❌ Wiki
  - ❌ Sponsorships
  - ❌ Discussions

### 2. Branch Protection Rules

#### Main Branch (Production)
- **Branch name pattern**: `main`
- **Protection rules**:
  - ✅ Restrict pushes that create files larger than 100MB
  - ✅ Require a pull request before merging
  - ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - ✅ Require conversation resolution before merging
  - ✅ Include administrators (enforce for admins too)

#### Dev Branch (Development)  
- **Branch name pattern**: `dev`
- **Default branch**: ✅ Set as default
- **Protection rules**:
  - ✅ Restrict pushes that create files larger than 100MB
  - ❌ No PR required (for active development)

### 3. Access & Permissions

#### Collaborators
- **Base permissions**: Write (for Mandalor Studio team)
- **Branch restrictions**: Only maintainers can push to `main`

#### Security
- **Dependency graph**: ✅ Enabled
- **Dependabot alerts**: ✅ Enabled
- **Dependabot security updates**: ✅ Enabled
- **Code scanning**: ✅ Enabled (GitHub CodeQL)

### 4. Repository Topics
```
shadcn-ui
radix-ui  
radix-colors
theme-generator
design-system
tailwindcss
nextjs
typescript
react
vercel
open-source
mandalor-studio
```

### 5. GitHub Pages (Optional)
- **Source**: Deploy from a branch
- **Branch**: `main` / `docs` (if documentation site needed)
- **Custom domain**: `docs.scaletone.mandalor.studio` (optional)

### 6. Issue Templates

Create `.github/ISSUE_TEMPLATE/` with:

#### Bug Report (`bug_report.yml`)
```yaml
name: Bug Report
description: File a bug report
title: "[Bug]: "
labels: ["bug", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: How can we reproduce this bug?
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
```

#### Feature Request (`feature_request.yml`)
```yaml
name: Feature Request
description: Suggest an idea for this project
title: "[Feature]: "
labels: ["enhancement", "triage"]
body:
  - type: textarea
    id: feature-description
    attributes:
      label: Feature Description
      description: A clear and concise description of what you want to happen.
    validations:
      required: true

  - type: textarea
    id: use-case
    attributes:
      label: Use Case
      description: Describe the problem you're trying to solve.
    validations:
      required: true
```

### 7. Pull Request Template

Create `.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested this change locally
- [ ] All existing tests pass
- [ ] I have added tests for new functionality

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
```

### 8. Automated Workflows

GitHub Actions are configured in `.github/workflows/` for:
- ✅ **CI/CD**: Build, test, and deploy
- ✅ **Code quality**: ESLint, TypeScript checking
- ✅ **Dependency updates**: Dependabot PRs
- ✅ **Security scanning**: CodeQL analysis

## Instructions

1. **Set default branch**: Go to Settings → General → Default branch → Change to `dev`
2. **Add topics**: Go to Settings → General → Add repository topics
3. **Configure branch protection**: Settings → Branches → Add protection rules
4. **Enable security features**: Settings → Security & analysis → Enable all
5. **Add issue templates**: Create `.github/ISSUE_TEMPLATE/` directory
6. **Set up PR template**: Create `.github/pull_request_template.md`

This configuration ensures a professional, secure, and maintainable repository setup for the v1 launch.