#include<stdio.h>
int main()
{
    int w,i,f,frames[50];
    printf("enter the window size");
    scanf("%d",&w);
    printf("enter the no. of frames to transmit");
    scanf("%d",&f);
    printf("enter the frames");
    for(i=1;i<=f;i++)
    scanf("%d",&frames[i]);
    printf("\n with sliding go back potocol the frames have been sent\n");
    printf("after sending %d frames at ecah stage sender waits for the acknowledgement sent by the reciever\n\n ",w);
    for(i=2;i<=f;i++)
    {
        if(i%w==0)
        {
            printf("%d",frames[i]);
            printf("acknowledgement of above frames is recieved by sender\n");
        }
        else
        {
            printf("%d",frames[i]);
        }
        
    }
    if(f%w!=0)
    printf("acknowledgement is recieved\n");
    return 0;
    }