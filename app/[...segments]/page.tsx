"use client";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import { routes } from "../mocks/data";
import Link from "next/link";
import { tags } from "../mocks/tags";
import Topic2 from "@/components/topic2";
import Topic1 from "@/components/topic1";

export default function Home(props: any) {
  const [topicInfo, setCurrentTopicInfo] = useState<any>();
  const [searchedTags, setSearchedTags] = useState<any>([]);
  const [foundRoutes, setFoundRoutes] = useState<any>([]);

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

  // useEffect(()=>{
  //   setCurrentTopicInfo(findTopic(routes, props.params.segments))
  // },[props.params.segments])

  const findRoutesByTags = useCallback((routes: any[], tags: string[]): any[] => {
    const result: any[] = [];

    for (const route of routes) {
      if (route.tags.some((tag: any) => tags.includes(tag))) {
        result.push(route);
      }

      if (route.subRoutes) {
        const matchingSubRoutes = findRoutesByTags(route.subRoutes, tags);
        result.push(...matchingSubRoutes);
      }
    }

    return result;
  }, []) 

  const renderContent = () => {
    switch (topicInfo?.topic) {
      case '1100_Planung':
        return <Topic2 />
      case '1000_Mietwohnung':
        return <Topic1 />
      default:
        return null
    }
  }

  useEffect(() => {
    
    setCurrentTopicInfo(findTopic(routes, props.params.segments));
  }, [props.params.segments]);

  useEffect(() => {
    console.log('searchedTags', searchedTags)
    setFoundRoutes(findRoutesByTags(routes, searchedTags));
  }, [findRoutesByTags, searchedTags])


  const onTagsSelect = (e: any) => {
    if(!searchedTags.includes(e.target.value))
    setSearchedTags((t: any) => [...t, e.target.value]);
  }

  console.log('f', foundRoutes)

  return (
    <main className={styles.main}>
      <h1> current page: {topicInfo?.topic ?? "Page not found"} </h1>
      <br />
      <label> BreedCum </label>
      <ul className={styles.breadcrumb}>
        {props.params.segments.map((segment:string, index:number)=>{
          const path = `/${props.params.segments.slice(0,index+1).join("/")}`;
          return(
            <li key={`segment-${index}`}>
              <Link legacyBehavior href={path}>
                <a>{segment}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <br />
      <br />
      <label> Select Tags </label>
      <select onChange={onTagsSelect}>
        {tags.map((t, index) => {
          return (
            <option value={t} key={`${t}-${index}`}>
              {t}
            </option>
          );
        })}
      </select>
      <br />
      <label> Selected Tags </label>
      <ul >
        {searchedTags.map((segment: string, index: number) => {
          return <li key={`segment-${index}`}>{segment}</li>;
        })}
      </ul>

      <br />
      <br />

      <h3> Found Route </h3>
      <ul>
        {foundRoutes.map((t: any, index: number) => {
          return <li key={`${t.topic}-${index}-1`}><Link href={t.path} > {t.topic} </Link></li>;
        })}
      </ul>


      {renderContent()}

      

      <div>
        {topicInfo?.prevPath && <Link href={topicInfo.prevPath}> Prev </Link>}
        {topicInfo?.nextPath && <Link href={topicInfo.nextPath}> Next </Link>}
      </div>
    </main>
  );
}
