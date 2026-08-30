# LG VisionLink SDK

LG VisionLink SDK is a sensor software platform for connecting LG Innotek camera, depth, and multi-sensor solutions to applications.

It provides product-specific device discovery and control, data acquisition, synchronization, sample applications, and installation guides to support development from hardware validation through application integration.

> **UDIR Camera System** is currently a standalone Jetson demonstration system and is not yet integrated with LG VisionLink SDK.

## Current Portfolio

| Solution | Core capabilities | Target platform | VisionLink integration |
|---|---|---|---|
| AI ISP Camera SDK | MIPI camera bring-up, Sensor Direct control, RAW capture, and a CUDA zero-copy pipeline | NVIDIA Jetson | Supported |
| Robot Multi-Sensor | Stereo, dToF, and radar data with synchronized Framesets | NVIDIA Jetson | Supported |
| RID Camera SDK | RGB, IR, depth, dual modes, and 3D point-cloud acquisition | Windows | Supported |
| UDIR Camera System | Behind-display IR camera with TensorRT-based AI image restoration | NVIDIA Jetson | Standalone system |

### Portfolio at a Glance

- **6** sensor integrations
- Up to **4K** supported resolution
- **2** target development platforms
- **4** completed solution projects

## Solutions

### AI ISP Camera SDK

An LG VisionLink SDK solution for bringing up a MIPI camera on Jetson and connecting captured frames to GPU-based imaging pipelines.

Key capabilities:

- Deployment-oriented IMX681 camera bring-up
- Sensor Direct gain and exposure control
- RAW10 camera data acquisition
- CUDA zero-copy reference pipeline
- Camera Viewer and Zero-Copy Viewer examples
- Architecture prepared for TensorRT and custom AI ISP stages

Validated environment:

- NVIDIA Jetson AGX Orin
- JetPack 6.2 / L4T 36.4
- CUDA 12
- C / C++

Documentation:

- [Product details](aiisp.html)
- [Installation and operation guide](aiisp-guide.html)

### Robot Multi-Sensor

An LG VisionLink SDK solution for controlling a Multi Perception Module that combines stereo cameras, dToF, and radar on Jetson.

Key capabilities:

- Direct APIs for individual sensors
- Time-synchronized Frameset API for multiple sensors
- Stereo images with optional stereo depth
- 8×8 dToF distance and status data
- Radar point clouds with Doppler and SNR
- MPM GUI Viewer for validating all sensor streams

Validated environment:

- NVIDIA Jetson AGX Orin
- Ubuntu 22.04
- JetPack 6.2 / L4T 36.4
- VisionLink SDK 2.1.1
- C / C++

Documentation:

- [Product details](robot.html)
- [Hardware and installation guide](robot-guide.html)

### RID Camera SDK

An LG VisionLink C/C++ SDK for integrating RGB, IR, and structured-light depth data from the LG Innotek RID Camera into Windows applications.

Key capabilities:

- RGB, IR, depth, RGB+IR, and RGB+Depth modes
- Runtime mode switching without restarting the stream
- BGR24 images and structured-light 3D points
- Gain, exposure, and illumination control
- C API-based device lifecycle management
- USB authentication and automatic logging

Development environment:

- Windows 10/11 64-bit
- Visual Studio 2022 / v143 toolset
- C++17
- OpenCV 3.4.6 runtime

Documentation:

- [Product details](dms.html)
- [Windows development guide](dms-guide.html)

### UDIR Camera System

UDIR refers to an **Under Display Infrared Camera** system. It places a DMS IR camera behind an automotive display panel to reduce the camera's visible presence in the cabin.

Jetson-based AI processing restores brightness, contrast, and image detail degraded by transmission through the display before sending the restored frames to the DMS demonstration.

Key capabilities:

- Behind-display IR camera integration
- 1280×960 RAW10 image acquisition
- OpenCV V4L2 camera input
- TensorRT and CUDA-based image restoration
- Restored and standard monochrome comparison modes
- Face-region and eye-blink monitoring demonstration
- PyQt6 UI with a multiprocessing shared-memory pipeline

Validated environment:

- NVIDIA Jetson AGX Orin 64GB
- Ubuntu 20.04.5
- JetPack 5 generation / L4T R35.1.3
- Linux 5.10 Tegra kernel
- Python, TensorRT, PyCUDA, and PyQt6

Documentation:

- [Product details and evaluation results](underdisplay.html)
- [Setup and operation guide](underdisplay-guide.html)

## Development Workflow

Each solution uses different hardware and target environments. Follow the verified product-specific guides rather than relying on a generic API or setup process.

1. Select the sensor solution and target platform for the application.
2. Review the hardware and software requirements in the product guide.
3. Prepare the required drivers and runtime using the documented installation procedure.
4. Validate the sensor data path with the supplied viewer or sample application.
5. Integrate the relevant APIs and data formats into the application.

## Website Documentation

| Page | Description |
|---|---|
| [index.html](https://reimagined-adventure-9m8817p.pages.github.io/index.html) | LG VisionLink SDK and sensor solution portfolio |
| [aiisp.html](https://reimagined-adventure-9m8817p.pages.github.io/aiisp.html) | AI ISP Camera SDK details |
| [aiisp-guide.html](https://reimagined-adventure-9m8817p.pages.github.io/aiisp-guide.html) | AI ISP installation and example guide |
| [robot.html](https://reimagined-adventure-9m8817p.pages.github.io/robot.html) | Robot Multi-Sensor details |
| [robot-guide.html](https://reimagined-adventure-9m8817p.pages.github.io/robot-guide.html) | MPM hardware, installation, and operation guide |
| [dms.html](https://reimagined-adventure-9m8817p.pages.github.io/dms.html) | RID Camera SDK details |
| [dms-guide.html](https://reimagined-adventure-9m8817p.pages.github.io/dms-guide.html) | RID Camera Windows development guide |
| [underdisplay.html](https://reimagined-adventure-9m8817p.pages.github.io/underdisplay.html) | UDIR system details and restoration evaluation |
| [underdisplay-guide.html](https://reimagined-adventure-9m8817p.pages.github.io/underdisplay-guide.html) | UDIR hardware setup and demonstration guide |

## Repository Structure

```text
.
├── index.html
├── aiisp.html
├── aiisp-guide.html
├── robot.html
├── robot-guide.html
├── dms.html
├── dms-guide.html
├── underdisplay.html
├── underdisplay-guide.html
├── styles.css
├── navigation.js
├── assets/
└── images/
    ├── aiisp/
    │   ├── setup/
    │   └── examples/
    ├── robot/
    │   ├── hardware/
    │   └── examples/
    └── udir/
        ├── setup/
        └── evaluation/
```

## Viewing the Website

This is a static website, so it can be viewed by opening [index.html](index.html) in a browser. Refer to each product's details and guide pages for complete capabilities and requirements.

## Resources

- [LGIT Optics GitHub](https://github.com/LGIT-Optics)
- [LG Innotek](https://www.lginnotek.com)

## License and Distribution

Licensing, distribution terms, and support coverage for each SDK package are defined by the documentation included with its product release.

---

Last updated: August 2026
