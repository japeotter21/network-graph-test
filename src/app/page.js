"use client"
import React, { useRef, useEffect } from 'react'
import Graph from "graphology";
import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl, SearchControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import LoadGraph from './components/LoadGraph';
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SigmaContainer style={{height:'600px',width:'1000px'}}>
          <ControlsContainer position={"bottom-left"}>
            <ZoomControl />
            <FullScreenControl />
            <LayoutForceAtlas2Control autoRunFor={1000} />
          </ControlsContainer>
          <ControlsContainer position={"top-left"}>
            <SearchControl style={{ width: "200px" }} />
          </ControlsContainer>
          <LoadGraph />
      </SigmaContainer>
    </main>
  )
}
