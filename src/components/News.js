import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

 
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  // constructor(props){
  //   super(props);
  //   // this.state={
  //   //   articles: [],
  //   //   loading:false,
  //   //   page: 1,
  //   //   totalResults:0

  //   // }

  // }

  const updateNews = async () =>{
    props.setProgress(10);

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    // setState({loading:true});
    setLoading(true)
    let data= await fetch(url);
    props.setProgress(30);

    let parsedData= await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    // loading: false})
    props.setProgress(100);
  }
  useEffect(()=>{
   updateNews();

  },[])

  // handleNextClick = async()=>{
  //   console.log("next");
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f80bf2b049c54bb5806ed105fa40bbe4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();
    
  //   this.setState({
  //     page:this.state.page+1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  // }
  // }

  // handlePrevClick = async()=>{
  //   console.log("prev");
   
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f80bf2b049c54bb5806ed105fa40bbe4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`; //backticks for string. and dollar for the number. why could we just not concatenate? string+number.
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();
  //   this.setState({
  //     page:this.state.page-1,
  //     articles: parsedData.articles,
  //     loading:false
  //   })
  
 const fetchMoreData = async () => {
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // this.setState({page:this.state.page+1})
    setPage(page+1)
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({articles: this.state.articles.concat(parsedData.articles), 
    //   totalResults: parsedData.totalResults})
   
  }
  

    return (
      <>
        <h2  className="text-center " style={{marginTop:'15vh'}}>{props.category.charAt(0).toUpperCase()+props.category.slice(1)} - Top Headlines</h2>
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.pub}/>
          </div>
        })}
       
            
        </div>
        </div>
        </InfiniteScroll>

        
        </>
    )
  

}

News.defaultProps={
  country:'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string
}
export default News