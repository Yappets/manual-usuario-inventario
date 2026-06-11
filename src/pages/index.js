import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Manual de Usuario"
      description="Manual de Usuario del Sistema de Gestión de Inventarios"
    >
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Manual de Usuario del Sistema de Gestión de Inventario
              </h1>

              <p className={styles.subtitle}>
                Guía de uso para consultar existencias, relevar productos, realizar egresos y visualizar detalles del inventario.
              </p>

              <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to="/docs/inicio">
                  Comenzar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}