---
title: Working with Remote Computers
---
### High Performance Computers

The laptops and desktops that we use for our personal work have limited computing power. By computing power we refer to:

1. Disk storage: typically measured in hundreds of Gigabites (GB) or a few Terabytes (TB), disk storage is the relatively slow type of
storage used to permanently store programs and data. You can think of this as the filing cabinet of your computer.

2. Memory (RAM): typically measured in a few to tens of Gigabytes (GB), RAM is fast memory that loses its contents when the computer is
powered off. You can think of this as being like a desk where you work. While it takes quite some time fetching files from the filing
cabinet and storing them there, it is fast to access a document that is next to you on your desk. Modern laptops typically have
8 or 16 GB of RAM. For data analysis 8 GB should be considered the minimum RAM, and 16 GB (or more, if you have the budget) is
preferred.

3. CPU: the calculator of the computer, modern CPUs can do multiple computations simultaneously using multiple CPU "cores" that
get packaged into a single chip. Each CPU can run computations expressed in a binary "machine language", and they are often
named after that language, for example x86 CPUs from Intel and AMD or ARM CPUs, available from several vendors (e.g. the M1
chips manufactured by TSMC and used in newer Apple computers).

4. Network: the connection between your computer and the outside world is either using wireless or wired networking. Network connections
are divided into Local Area Networks (LAN) within one or several nearby buildings and Wide Area Networks (WAN) between organisations or
offices. LANs typically run at speed in the hundreds of Megabits per second (Mbps) for wireless networking and at 1 Gigabit per second
(Gbps) or higher for wired networking. Within data centers, high speed networking equipment might connect different servers together
at 10s or 100s of Gbps.

5. Accelerators such as GPUs: Graphics Processor Units are special-purpose computing devices that were first invented to speed
up 3D graphics. Their features have since been re-used to create general purpose GPUs (GP-GPUs) that can be used by programs
which are specifically adapted for their use. GP-GPUs help speed up computing workloads in machine learning model training,
molecular dynamics and several other fields.

Each of these different aspects of computing can limit our data analysis in different ways:

1. Running out of disk space means that there is no more space to store either the raw data (such as sequencing reads) that needs to
analysed or the results that come out of analysis. Sometimes you need extra disk space for computer software (programs), but software
is typically a lot smaller than the Big Data being analysed from DNA sequencing.

2. Running out of RAM can dramatically slow down your computer and stop programs from running. Many computers are configured to try
and supplement RAM by moving data from RAM to disk (a process called paging or swapping) but because of the dramatic difference
in speed between RAM and disk storage, if you don't have enough RAM (memory) available for computing, computing cannot progress
efficiently.

3. In the past decades CPUs have incrementally increased in speed. The relatively slow growth in CPU speed has been supplemented
by a much faster growth in parallel computing, where individual tasks get split between multiple CPUs or CPU cores. Fast data
processing requires both having fast enough CPUs and also ensuring that the computing tasks are split up to make use of multiple
CPUs simultaneously.

4. Moving data off a computer, especially over Wide Area Networks, is almost always slower than moving data within the computer. In
addition, WAN connections are often congested as many different users try and move data simultaneously. As the use of "Big Data"
and data analysis has increased in institutions that have not typically engaged in the "Big Data" field, it has posed challenges
both for the capacity of computer networks and also for the correct configuration of these networks. Techniques such as "traffic
shaping" can sometimes help ensure that data needed for analysis can move around with high priority.

5. Some tasks (such as basecalling of data from Oxford Nanopore sequencers) require GPU accelerators. If you are going to
work with such data, ensure that you purchase the appropriate computing equipment for it's analysis.

To overcome the limitations of personal computers, organisations often turn to high performance servers, high performance
computer clusters and computing clouds. All of these solutions involve purchasing either bigger individual computers,
making use of computers working together or (in the case of cloud) renting computers as needed.

As computing moves beyond the personal computer, one needs ways of connecting to remote computers and moving data to
and from these remote computers.

### Secure (Remote) Shell: SSH

The `ssh` tool lets us connect to remote computers and run commands on them. The general format of the 
ssh command is:

```bash

ssh user@remote.computer
```

Where the `user` part is your username on the remote computer and the `remote.computer` part is the network (i.e. DNS)
name of the remote computer.

The workings of ssh are described in [this lesson](https://carpentries-incubator.github.io/hpc-intro/11-connecting/index.html#secure-connections)
from [HPC Carpentry](https://www.hpc-carpentry.org/index.html). In short, ssh encrypts the connection between your computer
and the remote computer to protect sensitive data moving across the network. It also authenticates the remote computer
using a _fingerprint_, to avoid _man in the middle_ attacks where someone else pretends to be the remote computer so that they can
steal data. This protection means that the first time you conenct to a remote computer you will see a message like this:

```
The authenticity of host 'shell.sanbi.ac.za (154.114.10.124)' can't be established.
ED25519 key fingerprint is SHA256:zeSwHHGOTvdKBD7fAXJpYZnhc0SA9OKaoKp3c2jPv8g.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

To be sure that you are connecting to the right machine, you can ask someone who already has access to the remote server to provide
you with a fingerprint. They can get the fingerprint using [these instructions](https://bitlaunch.io/blog/how-to-check-your-ssh-key-fingerprint/).

Once you type `yes` you will be asked for your password, and once you have entered the correct password, you will see a change 
in your Bash prompt, because you are now working on the remote computer. For example:

```bash
(base) pvh@synthpop:~$ ssh user1@shell.sanbi.ac.za
Welcome to Ubuntu 22.04.4 LTS (GNU/Linux 5.15.0-100-generic x86_64)

(base) user1@lesson:~$ 
```

You can use the `hostname` command to verify that you are now working on the remote computer. Always pay attention to the Bash
prompt in your terminal to ensure that you know which computer you are connected to.


#### Passwords and SSH user keys

As illustrated in the discussion of host fingerprinting, SSH uses keys to identify resources. These keys use a system
called Public-key cryptography which breaks up keys into two parts: a private part that must be kept secret and a
public part which can be shared with everyone. Anyone who has the public part of the key can verify a user if that
user has the private part of the key. This system is used to keep communication in SSH secure but it can also be used
to authenticate users. HPC Carpentry describes the use of ssh keys for authentication [here](https://carpentries-incubator.github.io/hpc-intro/11-connecting/index.html#better-security-with-ssh-keys)
but to summarise:

1. Using SSH keys to authenticate has some security advantages: you cannot mistype a password and every time you type your password to log in, you are sending secret information to
a computer that you don't control. Consider what happens if the remote computer has been compromised?

2. When using SSH keys to authenticate, the SSH key system assumes that anyone who has your private SSH key *is* you. This means that it is very important to keep your SSH private key secure.

3. You can increase the security of your SSH private key by assigning a password to unlock the key. You can then use SSH Agent to "remember" your password for you while you
are using your computer.

4. You should store your SSH private key in a secure store, such as a key safe, because if you lose it, you will lose access to all computers where you use it to authenticate.

5. Please use a key safe (also known as a password manager) for all passwords. There are several options, for example [LastPass](https://www.lastpass.com/) and [BitWarden](https://bitwarden.com/) that
are either cheap or free to use (for individuals). These services and apps provide the benefit of having all your passwords backed up, and being able to automatically generated secure passwords, 


#### Logging in to the shell server

Everyone has been given a username and password on `shell.sanbi.ac.za`. Previously you logged in using the web interface. This time, please log in using `ssh`:

```bash
ssh USERNAME@shell.sanbi.ac.za`
```

where `USERNAME` is the username that has been assigned to you. We will be using passwords to log in for now. You can set up SSH key based log in later.

### Moving data between computers

We have previously seen the use of `wget` to download files using the command line. The HPC Carpentry materials talk about `wget` and `curl` and also about archives,
which are files that within them contain many (often compressed) files. Read more in [this section](https://carpentries-incubator.github.io/hpc-intro/16-transferring-files/index.html#download-lesson-files-from-the-internet).

While downloading data is useful, we also need a mechanism for moving data between computers where we have SSH logins. That mechanism is provided by the `scp` program. This
program lets one securely copy data, thus the name. It's command line use is quite similar to the `cp` command, except that the data moves across the network.

For example, to copy a file from a remote computer to your local computer use the command:

```bash
scp USERNAME@remote.computer:FILENAME .
```

This will copy the file specified by `FILENAME` from the computer called `remote.computer`. It will log in to the computer using the username specified as `USERNAME` and store
the file in the current directory (that is what `.` is for).

A practical example can be done using the `shell.sanbi.ac.za` computer:

```bash

scp USERNAME@shell.sanbi.ac.za:message.txt .
```

And then look inside the file that you have downloaded to see a message.

As with any `cp` command, you can copy from any path to any other path. With `scp` the remote path goes after the colon (`:`). You can also copy from local to remote:

```bash
scp message.txt USERNAME@shell.sanbi.ac.za:
```

Again note that `USERNAME` needs to be replaced with your username.

As described in the HPC Carpentry materials, you can move entire folders between computers. The `rsync` command offers more options for copying files using the same 
secure connection that `scp` uses. And if you want a GUI alternative, look into [FileZilla](https://filezilla-project.org/download.php?type=client),
[WinSCP](https://winscp.net/eng/download.php) (for Windows) and [CyberDuck](https://winscp.net/eng/download.php) (for Windows and MacOS).



