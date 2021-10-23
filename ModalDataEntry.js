diff --git a/src/components/App/App.js b/src/components/App/App.js
index 2cbad02..df71cb9 100644
--- a/src/components/App/App.js
+++ b/src/components/App/App.js
@@ -1,10 +1,10 @@
 import { createContext, useState, useEffect } from "react";
+import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
+import { useTranslation } from "react-i18next";
+import { getData } from "../../services/getData";
 import AppHeader from "../AppHeader";
 import GeneratorsPage from "../GeneratorsPage";
 import SortingsPage from "../SortingsPage";
-import { getData } from "../../services/getData";
-import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
-import { useTranslation } from "react-i18next";
 
 export const TaskContext = createContext();
 export const LanguageContext = createContext();
@@ -23,7 +23,6 @@ function App() {
   useEffect(() => {
     getData(`http://localhost:3000/tasks`).then((data) => {
       setDataTask(data);
-      console.log(data);
     });
   }, []);
 
diff --git a/src/components/CollapseList/CollapseList.js b/src/components/CollapseList/CollapseList.js
index b79f6b0..e89419d 100644
--- a/src/components/CollapseList/CollapseList.js
+++ b/src/components/CollapseList/CollapseList.js
@@ -1,16 +1,16 @@
 import { useContext } from "react";
 import { Collapse, Space } from "antd";
-import ModalDataEntry from "../ModalDataEntry";
 import { findHandler, getTasksByType } from "../../helpers/findHandler";
-import { TaskContext } from "../App/App";
-import { LanguageContext } from "../App/App";
-import { Trans } from "react-i18next";
+import { TaskContext, LanguageContext } from "../App/App";
+import ModalDataEntry from "../ModalDataEntry";
 const { Panel } = Collapse;
 
 // Change the method of passing a parameter
 function CollapseList({ type }) {
-  const dataTasks = useContext(TaskContext);
   const pageLanguage = useContext(LanguageContext);
+  // Get all data
+  const dataTasks = useContext(TaskContext);
+  // Get filter data by page type
   const pageData = getTasksByType(dataTasks, type);
 
   return (
@@ -18,7 +18,6 @@ function CollapseList({ type }) {
       <Collapse>
         {pageData.map((item) => {
           const { id, description, handlerName, handlerParams } = item;
-          console.log(pageLanguage);
           return (
             <Panel header={handlerName} key={id}>
               <Space size={"middle"}>
diff --git a/src/components/ModalDataEntry/ModalDataEntry.js b/src/components/ModalDataEntry/ModalDataEntry.js
index 1e6296c..55901b8 100644
--- a/src/components/ModalDataEntry/ModalDataEntry.js
+++ b/src/components/ModalDataEntry/ModalDataEntry.js
@@ -1,8 +1,8 @@
-import React, { useState } from "react";
+import { useState } from "react";
 import { Modal, Button } from "antd";
+import { Trans } from "react-i18next";
 import AreaDataEntry from "../AreaDataEntry";
 import ResultBaner from "../ResultBaner";
-import { Trans } from "react-i18next";
 
 const ModalDataEntry = ({ description, handler, handlerParams }) => {
   const [isModalVisible, setIsModalVisible] = useState(false);
