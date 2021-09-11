import React from "react";
import Head from "next/head";
import styles from "../styles/Custom.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import { motion } from "framer-motion";
import firebase from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage() {
  const [showAlert, setShowAlert] = React.useState(true);
  const db = firebase.firestore();
  const [value, loading, error] = useCollection(
    db.collection("Orders").orderBy("Timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div className="">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>
          Teamdh || World's best experienced and skilled developer's team.
        </title>
        <meta
          name="description"
          content="Team dh is a software development company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container m-auto">
        <div className="w-full h-full-screen flex flex-col justify-center items-center bg-white">
          <h1>Hello world!</h1>
        </div>
        <div className="w-full h-full-screen flex flex-col justify-center items-center bg-white">
          <h1>Hello world!</h1>
        </div>
        <Footer />
      </div>
      <div className="p-4 footer bg-gray-300 text-base-content footer-center">
        <div>
          <p>
            Copyright © 2021 - All right reserved by&nbsp;
            <a className="cursor-pointer text-blue-500 hover:underline">
              Teamdh Software Industry Ltd
            </a>
          </p>
        </div>
      </div>

      {/* <main className={styles.main}>
        <motion.div animate={{ scale: 0.5 }}>
          <h1 className={styles.title}>
            Welcome to <a href="https://teamdh.org">Teamdh.org!</a>
          </h1>
        </motion.div>
        <Spacer />
        <Spacer />
        {loading === false ? (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div>
              <table className="table-fixed custom-w border-collapse border-2 rounded-md">
                <thead>
                  <tr>
                    <th className="w-1/2 border-r pl-4">Name</th>
                    <th className="w-1/4 border-r pl-4">Topup Type</th>
                    <th className="w-1/4 border-r pl-4">Order Status</th>
                  </tr>
                </thead>
                {value && (
                  <tbody>
                    {value.docs.map((doc) => (
                      <tr className="border-t border-b" key={doc.id}>
                        <td className="border-r pl-4">
                          {doc.data().buyerName}
                        </td>
                        <td className="border-r pl-4">
                          {doc.data().topupType}
                        </td>
                        <td className="border-r pl-4">
                          {doc.data().orderStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </motion.div>
        ) : null}
        {showAlert ? (
          <div className="bg-purple-600 text-white px-6 py-4 border-0 rounded relative mb-4 bg-blueGray-500">
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell"></i>
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">blueGray!</b> This is a blueGray alert -
              check it out!
            </span>
            <button
              onClick={() => setShowAlert(false)}
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            >
              <span>×</span>
            </button>
          </div>
        ) : null}
      </main>
     */}
    </div>
  );
}
