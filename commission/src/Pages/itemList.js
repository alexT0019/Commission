import LanguageSelection from "../Components/languageSelection";
import NavBar from "../Components/navbar";

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import Footer from "../Components/footer";

export default function ItemList() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Headshot',
            rows: 2,
            cols: 2,
            href: "http://www.google.com"
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Waist Up',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Full Body',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Illustration',
            cols: 2,
        }
    ];

    return (
        <div>
            <LanguageSelection />

            <NavBar />

            {/* https://mui.com/material-ui/react-image-list/#image-list-with-title-bars */}
            <ImageList sx={{ width: 500, height: 450 }}>
                {/* <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem> */}
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <a href={item.href}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </a>
                        <ImageListItemBar
                            title={item.title}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            
            <Footer />
        </div>
    )
}