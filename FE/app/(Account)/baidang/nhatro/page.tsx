"use client"
import Head from 'next/head';
import AddressSearch from '@/app/ui/Master/Map';

export default function Home() {
    return (
        <div className="bg-white border rounded-lg p-5">
            <Head>
                <title>Address Search</title>
                <meta name="description" content="Search address and get lat/lon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Tra cứu Địa Chỉ</h1>
                <AddressSearch />
            </main>
        </div>
    );
}
