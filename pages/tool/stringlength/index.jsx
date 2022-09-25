import React, { useState } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
    const [length, setLength] = useState(0)
    const inputChange = (v) => {
        setLength(v.target.value.length)
    }

    return (
        <div >
            <Head>
                <title>字符串长度工具</title>
                <meta name="description" content="字符串长度工具" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.box}>
                <p>字符串长度统计</p>
                <textarea id="story" name="story" rows="20" cols="100" placeholder='请输入字符串' onInput={inputChange}>
                </textarea>
                <div>字符串长度为：<span className={styles.number}>{length}</span> 个字符</div>
            </div>
        </div >
    )
} 
