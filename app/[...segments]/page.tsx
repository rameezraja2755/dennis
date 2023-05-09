'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { routes } from '../mocks/data';
import Link from 'next/link';

export default function Home(props: any) {

  const [ topicInfo, setCurrentTopicInfo ] = useState<any>();

  function findTopic(topics: any, segments: any) {
    let currentTopic = null;
  
    for (const segment of segments) {
      let topicFound = false;
  
      for (const topic of topics) {
        if (topic.topic === segment) {
          currentTopic = topic;
          topicFound = true;
          break;
        }
      }

      if (!topicFound) {
        return null;
      }

      if (currentTopic.subRoutes === undefined) {
        break;
      }
  
      topics = currentTopic.subRoutes;
    }
  
    return currentTopic;
  }
  
  useEffect(() => {
    setCurrentTopicInfo(findTopic(routes, props.params.segments));
  }, [props.params.segments])
  
  return (
    <main className={styles.main}>
      <h1> current page: {topicInfo?.topic ?? 'Page not found'} </h1>
      <br />
      <h3> BreedCum </h3>
      <ul>
        {
          props.params.segments.map((segment: string, index: number) => {
            return <li key={`segment-${index}`}>{segment}</li>
          })
        }
      </ul>
      <br />
      <br />
      <br />
      <div>
        { topicInfo?.prevPath && <Link href={topicInfo.prevPath} > Prev </Link>}
        { topicInfo?.nextPath && <Link href={topicInfo.nextPath} > Next </Link>}
      </div>
    </main>
  )
}
