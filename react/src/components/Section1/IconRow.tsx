import { RubyOriginal, RailsOriginalWordmark, RspecOriginal } from 'devicons-react';
import { ReactOriginal, NodejsOriginal, TypescriptOriginal } from 'devicons-react';
import { PostgresqlOriginal, MongodbOriginal, RedisOriginal } from 'devicons-react';
import { DockerOriginal, HerokuOriginal, AmazonwebservicesPlainWordmark } from 'devicons-react';
import { Html5Original, Css3Original, TailwindcssOriginal } from 'devicons-react';
import { GitOriginal, PostmanOriginal, VitejsOriginal } from 'devicons-react';
import styles from './Section1.module.css';

const IconRow: React.FC = () => {
  return (
    <>
      <div className={styles.iconRow}>
        <RubyOriginal size={50} />
        <RailsOriginalWordmark size={50} />
        <RspecOriginal size={50} />
      </div>
      <div className={styles.iconRow}>
        <TypescriptOriginal size={50} />
        <NodejsOriginal size={50} />
        <ReactOriginal size={50} />
      </div>
      <div className={styles.iconRow}>
        <PostgresqlOriginal size={50} />
        <MongodbOriginal size={50} />
        <RedisOriginal size={50} />
      </div>
      <div className={styles.iconRow}>
        <DockerOriginal size={50} />
        <HerokuOriginal size={50} />
        <AmazonwebservicesPlainWordmark size={50} />
      </div>
      <div className={styles.iconRow}>
        <Html5Original size={50} />
        <Css3Original size={50} />
        <TailwindcssOriginal size={50} />
      </div>
      <div className={styles.iconRow}>
        <GitOriginal size={50} />
        <PostmanOriginal size={50} />
        <VitejsOriginal size={50} />
      </div>
    </>
  );
};

export default IconRow;
