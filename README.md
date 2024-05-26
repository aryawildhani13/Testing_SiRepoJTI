# Cypress Testing for SIREPOJTI

## Pendahuluan

Repository ini berisi skrip pengujian untuk aplikasi SIREPOJTI menggunakan Cypress. Panduan ini akan membantu Anda menginstal Cypress, menjalankan tes, dan menggunakan plugin untuk mengimpor gambar dan file.

## Prasyarat

- Node.js versi terbaru
- NPM (Node Package Manager) atau Yarn

## Instalasi

1. **Clone repository ini:**

    ```bash
    git clone https://github.com/username/sirepojti-tests.git
    cd sirepojti-tests
    ```

2. **Instal dependensi:**

    Menggunakan NPM:

    ```bash
    npm install
    ```

    Menggunakan Yarn:

    ```bash
    yarn install
    ```

3. **Instal Cypress:**

    Menggunakan NPM:

    ```bash
    npm install cypress --save-dev
    ```

    Menggunakan Yarn:

    ```bash
    yarn add cypress --dev
    ```

4. **Instal Cypress File Upload Plugin:**

    Menggunakan NPM:

    ```bash
    npm install --save-dev cypress-file-upload
    ```

    Menggunakan Yarn:

    ```bash
    yarn add cypress-file-upload --dev
    ```

## Konfigurasi

1. **Konfigurasi Cypress:**

    Buka atau buat file `cypress/support/commands.js` dan tambahkan baris berikut:

    ```javascript
    import 'cypress-file-upload';
    ```

2. **Konfigurasi Plugin:**

    Pastikan file `cypress/plugins/index.js` terlihat seperti ini:

    ```javascript
    module.exports = (on, config) => {
      // Konfigurasi plugin dapat ditambahkan di sini
    }
    ```

## Menjalankan Tes

1. **Buka Cypress Test Runner:**

    Menggunakan NPM:

    ```bash
    npx cypress open
    ```

    Menggunakan Yarn:

    ```bash
    yarn run cypress open
    ```

2. **Jalankan Tes di Command Line:**

    Menggunakan NPM:

    ```bash
    npx cypress run
    ```

    Menggunakan Yarn:

    ```bash
    yarn run cypress run
    ```

## Contoh Penggunaan

### Mengunggah File

Contoh penggunaan plugin file upload dalam tes:

```javascript
describe("File Upload Test", () => {
  it("Mengunggah file yang valid", () => {
    cy.visit("https://sirepojti.gbrncode.com/home/user-management");
    cy.get('.btn-success.d-flex.align-items-center.gap-2[data-bs-target="#importModal"]').click();
    cy.get('select[name="program_study"]').select('Teknik Informatika');
    cy.get('input[name="import_file"]').attachFile('path/to/valid/user-data.xlsx');
    cy.get('button.btn-success.btn-submit').click();
    cy.contains("Import successful").should("be.visible");
  });
});
