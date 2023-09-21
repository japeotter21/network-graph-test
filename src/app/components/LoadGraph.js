"use client"
import React, { useState, useEffect } from 'react'
import Graph from "graphology";
import { useLoadGraph, useSigma } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export default function LoadGraph() {
    const nodes = ['PHASE1START','Group 1','Candidate 1','Candidate 2','Candidate 3', 'Group 2','Candidate 4','Candidate 5','PHASE1END','PHASE2START','Group 1','Candidate 6','Candidate 7', 'PHASE2END']
    const edges = [[0,1],[1,2],[1,3],[1,4],[0,5],[5,6],[5,7],[0,8],[8,9],[9,10],[10,11],[10,12],[9,13]]
    const graph = new Graph()
    const sigma = useSigma();
    const loadGraph = useLoadGraph();
    nodes.forEach((item,id)=>{
        if(!(item.includes('PHASE')) && !(item.includes('Group')))
        {
            graph.addNode(id, {x:Math.floor(Math.random()*id*10),y:Math.floor(id*Math.random()*5),size: 15, label:item, color:'#bbb'})
        }
        else
        {
            graph.addNode(id, {x:id*10,y:(nodes.length-id)*5,size: 15, label:item, color:'#1976d2'})
        }
    })
    edges.forEach((item,id)=>{
        graph.addEdgeWithKey(`edge${id}`,item[0],item[1],{label:`edge${id}`})
    })
    loadGraph(graph)
    return null
}
